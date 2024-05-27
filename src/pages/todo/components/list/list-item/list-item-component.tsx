import React from "react";
import styles from "./list-item-component.module.css";
import { Task } from "../../../../../types";

type Props = {
  task: Task;
  toggleTask: (id: number) => void;
};

export const ListItemComponent: React.FC<Props> = ({ task, toggleTask }) => (
  <label className={styles.checkboxes__label}>
    {task.name}
    <input
      type="checkbox"
      checked={task.isDone}
      onChange={() => toggleTask(task.id)}
    />
  </label>
);
