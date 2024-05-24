import React from "react";
import styles from './list-item-component.module.css'

type props = {
  isDone: boolean;
  children: string;
  
  onChildClick: () => void;
};

export const ListItemComponent: React.FC<props> = ({ isDone, children, onChildClick}) => {
  //const activeClass = isDone ? 'is-done' : undefined

  return [
    <label className={styles.checkboxes__label}>
         Melisandre<input type="checkbox" id="1" value="2_checkbox" />
    </label>
  ]
};
