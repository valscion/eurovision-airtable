"use client";

import { type AirtableItem } from "@/app/types/airtable";

import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DroppableProvided,
} from "react-beautiful-dnd";
interface Props {
  items: Array<AirtableItem>;
}

export const Ranking = ({ items: originalItems }: Props) => {
  const [items, setItems] = React.useState<AirtableItem[]>(originalItems);

  const dragHandler = (result: any) => {
    if (!result.destination) {
      return;
    }
    let list = [...items];
    const [reorderedItem] = list.splice(result.source.index, 1);
    list.splice(result.destination.index, 0, reorderedItem);
    setItems(list);
  };
  return (
    <DragDropContext onDragEnd={dragHandler}>
      <Droppable droppableId="droppable">
        {(provided: DroppableProvided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided: DraggableProvided) => (
                  <li
                    className="sdc"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                  >
                    <h2 className="text-2xl text-blue-500">
                      {item.fields.Flag} {item.fields.Country}
                    </h2>
                    <p className="px-4">
                      {item.fields.Artist} — {item.fields.Song}
                    </p>
                  </li>
                )}
              </Draggable>
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
