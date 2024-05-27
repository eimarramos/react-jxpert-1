import { ListItemComponent } from "./list-item/list-item-component";
import styles from "./list-component.module.css";
import { Task } from "../../../../types/task";

type Props = {
  tasks: Task[];
  toggleTask: (id: number) => void;
};

export const ListComponent: React.FC<Props> = ({ tasks, toggleTask }) => (
  <div className={styles.checkboxes}>
    {tasks.map((task) => (
      <ListItemComponent key={task.id} task={task} toggleTask={toggleTask} />
    ))}
  </div>
);
