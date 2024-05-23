import React, { createElement } from "react";

type props = {
  isDone: boolean;
  content: string;
};

export const ListItemComponent: React.FC<props> = ({ isDone, content }) => {
  return createElement(
    "li",
    {
      isDone: isDone,
      className: "list-item",
      onClick: () => {
        console.log("Reacciono!", content);
      },
    },
    content
  );
};
