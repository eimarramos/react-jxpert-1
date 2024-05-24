import React from "react";
import styles from './list-item-component.module.css'

type props = {
  isDone: boolean;
  children: string;
  
  onChildClick: () => void;
};

export const ListItemComponent: React.FC<props> = ({ isDone, children, onChildClick}) => {
  //const activeClass = isDone ? 'is-done' : undefined
  const getCustomStyles = () =>{
    if(isDone){
      return {color: 'red'}
    }
    return {color: 'blue'}
  }

  return [
    <li className={styles.red} style={getCustomStyles()} onClick={onChildClick}>
      {children}
    </li>
  ]
};
