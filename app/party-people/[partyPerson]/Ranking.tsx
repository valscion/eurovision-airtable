"use client";

import { updateRecordVotes } from "@/app/apiCalls";
import {
  AirtableUpdateRecordPayload,
  type AirtablePerson,
  type AirtableRecord,
} from "@/app/types/airtable";

import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";
interface Props {
  records: Array<AirtableRecord>;
  person: AirtablePerson;
}

type State = {
  [key: string]: AirtableRecord[];
};

type RequestState =
  | { type: "FRESH" }
  | { type: "DIRTY" }
  | { type: "SENDING" }
  | { type: "ERROR"; message: string }
  | { type: "SUCCESS" };

// a little function to help us with reordering the result
const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const Ranking = ({ records: originalRecords, person }: Props) => {
  const initialGroups = person.options.reduce(
    (acc, option) => {
      const recordsInThisGroup = originalRecords.filter(
        // @ts-ignore -- This works but I don't know TS well enough to permit this
        (record) => record.fields[person.name] === option.name
      );
      return {
        ...acc,
        [option.name]: recordsInThisGroup,
      };
    },
    {
      NOT_RANKED: originalRecords.filter(
        // @ts-ignore -- This works but I don't know TS well enough to permit this
        (record) => record.fields[person.name] === undefined
      ),
    }
  );
  const [isReordering, setIsReordering] = React.useState(false);
  const [requestState, setRequestState] = React.useState<RequestState>({
    type: "FRESH",
  });

  const [records, setRecords] = React.useState<State>(initialGroups);

  useUnsavedChangesWarning(
    requestState.type !== "FRESH" && requestState.type !== "SUCCESS"
  );

  const dragHandler = (result: DropResult) => {
    if (requestState.type === "SENDING") {
      // Abort drag handling when request is in progress
      return;
    }
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;
    const current: AirtableRecord[] = [...records[source.droppableId]];
    const next: AirtableRecord[] = [...records[destination.droppableId]];
    const target: AirtableRecord = current[source.index];

    // moving to same list
    if (source.droppableId === destination.droppableId) {
      const reordered: AirtableRecord[] = reorder(
        current,
        source.index,
        destination.index
      );
      const result: State = {
        ...records,
        [source.droppableId]: reordered,
      };
      setRecords(result);
      return;
    }

    // moving to different list

    // remove from original
    current.splice(source.index, 1);
    // insert into next
    next.splice(destination.index, 0, target);

    const resultTwo: State = {
      ...records,
      [source.droppableId]: current,
      [destination.droppableId]: next,
    };
    setRecords(resultTwo);
    setRequestState({ type: "DIRTY" });
    return;
  };

  const sendUpdateVotes = () => {
    const updatePayload = Object.entries(records).reduce(
      (acc, [category, recordsInCategory]) => {
        if (category === "NOT_RANKED") {
          recordsInCategory.forEach((record) => {
            acc.push({
              recordId: record.id,
              // @ts-expect-error -- let's help debugging a bit here with an extra field
              recordDebug: record.fields.Country,
              choiceId: null,
              field: person.id,
            });
          });
        } else {
          recordsInCategory.forEach((record) => {
            acc.push({
              recordId: record.id,
              // @ts-expect-error -- let's help debugging a bit here with an extra field
              recordDebug: record.fields.Country,
              choiceId: category,
              field: person.id,
            });
          });
        }
        return acc;
      },
      [] as AirtableUpdateRecordPayload[]
    );
    setRequestState({ type: "SENDING" });
    const updatePromise = updateRecordVotes({
      updates: updatePayload,
    });
    updatePromise
      .then(() => {
        setRequestState({ type: "SUCCESS" });
      })
      .catch((err) => {
        console.error(err);
        setRequestState({ type: "ERROR", message: err.toString() });
      });
  };

  return (
    <>
      <label className="block pb-4">
        <input
          type="checkbox"
          className="mr-2"
          onChange={(evt) => setIsReordering(evt.currentTarget.checked)}
        />
        Toggle small UI
      </label>
      <button
        onClick={sendUpdateVotes}
        disabled={
          // Only allow sending new requests when there are changes or to retry
          !(requestState.type === "DIRTY" || requestState.type === "ERROR")
        }
        className="mb-4 rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-blue-400 hover:border-transparent hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        {(() => {
          switch (requestState.type) {
            case "FRESH":
              return "Do some changes first";
            case "DIRTY":
              return "Save changes";
            case "SENDING":
              return "Sending... please wait.";
            case "ERROR":
              return "Oh no, an error happened! Please retry";
            case "SUCCESS":
              return "Saved! Feel free to do more changes";
          }
        })()}
      </button>
      <DragDropContext onDragEnd={dragHandler}>
        <div
          className={`ml-4 mr-4 flex h-full w-full flex-shrink-0 overflow-auto`}
        >
          {Object.entries(records).map(([columnId, list]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided: DroppableProvided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`${
                    isReordering ? "mr-4 w-8" : "w-82 mr-6"
                  } flex flex-shrink-0 flex-col`}
                >
                  <div className="w-32 pb-2">
                    {columnId === "NOT_RANKED"
                      ? isReordering
                        ? "???"
                        : "Not ranked"
                      : columnId}
                  </div>
                  {list.map((record, index) => (
                    <Draggable
                      key={record.id}
                      draggableId={record.id}
                      index={index}
                    >
                      {(provided: DraggableProvided, draggableSnapshot) => (
                        <div
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                        >
                          <SingleRecord
                            record={record}
                            isReordering={isReordering}
                            isDragging={draggableSnapshot.isDragging}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </>
  );
};

const SingleRecord = ({
  record,
  isReordering,
  isDragging,
}: {
  record: AirtableRecord;
  isReordering: boolean;
  isDragging: boolean;
}) => (
  <>
    <div
      className={`flex ${
        isReordering ? "mb-2 w-11 text-xl" : "mb-4 w-48"
      } flex-col rounded border-2 border-blue-900 p-2 ${
        isDragging && "bg-slate-800"
      }`}
    >
      <div className="font-medium text-gray-200">
        {record.fields.Flag} {!isReordering && record.fields.Country}
      </div>
      {!isReordering && (
        <div className="mt-2 text-sm text-green-300">
          {record.fields.Artist} — {record.fields.Song}
        </div>
      )}
    </div>
  </>
);

function useUnsavedChangesWarning(hasUnsavedChanges: boolean) {
  React.useEffect(() => {
    if (!hasUnsavedChanges) return;
    const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
      const warningMessage =
        "You have not saved all your votes, are you sure you want to leave?";

      event.returnValue = warningMessage;
      return warningMessage;
    };
    window.addEventListener("beforeunload", beforeUnloadHandler);
    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    };
  }, [hasUnsavedChanges]);
}
