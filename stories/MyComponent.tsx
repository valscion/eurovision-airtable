import React from "react";

interface Props {
  name: string;
}

export const MyComponent = ({ name }: Props) => {
  return <div>This is my test component: {name}</div>;
};
