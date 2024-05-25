import React from "react";
import styles from "./list-item-component.module.css";
import { Task } from "../../../../../models/task";

type props = {
  task: Task;
};

export const ListItemComponent: React.FC<props> = ({ task }) => {
  return [
    <label className={styles.checkboxes__label}>
      {task.name}
      <input
        type="checkbox"
        defaultChecked={task.isDone}
        onClick={() => {
          task.isDone = !task.isDone;
        }}
      />
    </label>,
  ];
};
