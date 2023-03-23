"use client";

import { type AirtableRecord } from "@/app/types/airtable";

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
}

type State = {
  [key: string]: AirtableRecord[];
};

// a little function to help us with reordering the result
const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const Ranking = ({ records: originalRecords }: Props) => {
  const [isReordering, setIsReordering] = React.useState(false);

  const [records, setRecords] = React.useState<State>(
    originalRecords.reduce((acc, record, index) => {
      const groupName = `idx_${Math.floor(index / 7)}`;
      if (!acc[groupName]) {
        acc[groupName] = [];
      }
      acc[groupName].push(record);
      return acc;
    }, {} as State)
  );

  const dragHandler = (result: DropResult) => {
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
    return;
  };
  return (
    <>
      <label className="block pb-8">
        <input
          type="checkbox"
          className="mr-2"
          onChange={(evt) => setIsReordering(evt.currentTarget.checked)}
        />
        Toggle small UI
      </label>
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
                  <div className="w-32 pb-2">{columnId}</div>
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
