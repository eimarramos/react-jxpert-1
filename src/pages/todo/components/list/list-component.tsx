import { ListItemComponent } from "./list-item/list-item-component";
import styles from "./list-component.module.css";
import { Tasks } from "../../../../data/tasks-data";

const items = Tasks;

export const ListComponent: React.FC = () => (
  <div className={styles.checkboxes}>
    {items.map((item, index) => {
      return [<ListItemComponent key={index} task={item}></ListItemComponent>];
    })}
  </div>
);
