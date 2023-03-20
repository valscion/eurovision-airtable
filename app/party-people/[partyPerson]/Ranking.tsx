"use client";

import { type AirtableItem } from "@/app/types/airtable";

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
  items: Array<AirtableItem>;
}

type State = {
  [key: string]: AirtableItem[];
};

// a little function to help us with reordering the result
const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const Ranking = ({ items: originalItems }: Props) => {
  const [items, setItems] = React.useState<State>(
    originalItems.reduce((acc, item, index) => {
      const groupName = `index${Math.floor(index / 7)}`;
      if (!acc[groupName]) {
        acc[groupName] = [];
      }
      acc[groupName].push(item);
      return acc;
    }, {} as State)
  );

  const dragHandler = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;
    const current: AirtableItem[] = [...items[source.droppableId]];
    const next: AirtableItem[] = [...items[destination.droppableId]];
    const target: AirtableItem = current[source.index];

    // moving to same list
    if (source.droppableId === destination.droppableId) {
      const reordered: AirtableItem[] = reorder(
        current,
        source.index,
        destination.index
      );
      const result: State = {
        ...items,
        [source.droppableId]: reordered,
      };
      setItems(result);
      return;
    }

    // moving to different list

    // remove from original
    current.splice(source.index, 1);
    // insert into next
    next.splice(destination.index, 0, target);

    const resultTwo: State = {
      ...items,
      [source.droppableId]: current,
      [destination.droppableId]: next,
    };
    setItems(resultTwo);
    return;
  };
  return (
    <DragDropContext onDragEnd={dragHandler}>
      <div className="flex h-full flex-shrink-0">
        {Object.entries(items).map(([columnId, list]) => (
          <Droppable droppableId={columnId} key={columnId}>
            {(provided: DroppableProvided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-82 mr-6 flex flex-shrink-0 flex-col"
              >
                <div className="w-32 pb-2">{columnId}</div>
                {list.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided: DraggableProvided) => (
                      <div
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                      >
                        <SingleItem item={item} />
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
  );
};

const SingleItem = ({ item }: { item: AirtableItem }) => (
  <>
    <div className="mb-4 flex w-48 flex-col rounded border-2 border-blue-900 p-2">
      <div className="font-medium text-gray-200">
        {item.fields.Flag} {item.fields.Country}
      </div>
      <div className="mt-2 text-sm text-green-300">
        {item.fields.Artist} — {item.fields.Song}
      </div>
    </div>
  </>
);
