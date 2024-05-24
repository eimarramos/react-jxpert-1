import { createElement } from "react";
import { ListItemComponent } from "./list-item/list-item-component";


export const ListComponent = () => {

  const childClick = (content: string) => {
    console.log("Hijo hace click", content)
  };
  

  const items: JSX.Element[] = [
    <ListItemComponent content="Item1" isDone={false} onChildClick={childClick}></ListItemComponent>,
    <ListItemComponent content="Item2" isDone={true} onChildClick={childClick}></ListItemComponent>,
    <ListItemComponent content="Item3" isDone={false} onChildClick={childClick}></ListItemComponent>,
  ];

  return createElement("ul", { id: "list" }, ...items);
};
