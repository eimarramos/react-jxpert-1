import React, { createElement } from "react";



type props = {
  isDone: boolean;
  content: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChildClick: Function;
};

export const ListItemComponent: React.FC<props> = ({ content, onChildClick}) => {
  return createElement(
    "li",
    {
      isDone: false,
      className: "list-item",
      onClick: (e: Event) => {
        onChildClick(content, e);
      },
    },
    content
  );
};
