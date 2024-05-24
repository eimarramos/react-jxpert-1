import { ListItemComponent } from "./list-item/list-item-component";
import styles from './list-component.module.css'

const items2 =  ["Item1", "Item2", "Item3"];

const childClick = (itemIndex: number) => {
  console.log("Hijo hace click", itemIndex);
};

export const ListComponent = () => (
  <ul className={styles.red}>
    {
      items2.map((item, index) => {
        return[
          <ListItemComponent key={item} isDone={false} onChildClick={() => {
            childClick(index)
          }}>
            {item}
          </ListItemComponent>
        ]
      })
    }
  </ul>
);
