import { createElement } from "react";
import { ListItemComponent } from "./list-item/list-item-component";

export const ListComponent = () => {
  const items: JSX.Element[] = [
    <ListItemComponent content="Item1" isDone={false}></ListItemComponent>,
    <ListItemComponent content="Item2" isDone={true}></ListItemComponent>,
    <ListItemComponent content="Item3" isDone={false}></ListItemComponent>,
  ];

  return createElement("ul", { id: "list" }, ...items);
};
