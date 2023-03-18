import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DroppableProvided,
} from "react-beautiful-dnd";
interface Props {
  name: string;
}

interface List {
  id: string;
  title: string;
}

const list: List[] = [
  {
    id: "1",
    title: "First",
  },
  {
    id: "2",
    title: "Second",
  },
  {
    id: "3",
    title: "Third",
  },
];

export const MyComponent = ({ name }: Props) => {
  const [items, setItems] = React.useState<List[]>(list);

  const dragHandler = (result: any) => {
    if (!result.destination) {
      return;
    }
    let list: List[] = [...items];
    const [reorderedItem] = list.splice(result.source.index, 1);
    list.splice(result.destination.index, 0, reorderedItem);
    setItems(list);
  };
  return (
    <DragDropContext onDragEnd={dragHandler}>
      <Droppable droppableId="droppable">
        {(provided: DroppableProvided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item: List, index: number) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided: DraggableProvided) => (
                  <li
                    className="sdc"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                  >
                    {item.title}
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
