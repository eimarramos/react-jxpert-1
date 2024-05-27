import styles from "./todo-component.module.css";
import { useState } from "react";
import { Tasks } from "../../data/tasks-data";
import { ListComponent } from "./components/list/list-component";
import { TabsComponent } from "./components/list-tabs/list-tabs-components";
import { AddTaskComponent } from "./components/add-task/add-task-component";
import { Counters, Task } from "../../types";

export const TodoComponent: React.FC = () => {
  const [items, setItems] = useState<Task[]>(Tasks);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const getCounters: Counters = {
    total: items.length,
    done: items.filter((i) => i.isDone === true).length,
    pendent: items.filter((i) => i.isDone === false).length,
  };

  const filteredItems = items.filter((item) => {
    if (filter === "completed") return item.isDone;
    if (filter === "pending") return !item.isDone;
    return true;
  });

  const toggleTask = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const addTask = (name: string) => {
    const newTask: Task = {
      id: items.length + 1,
      isDone: false,
      name: name,
    };

    setItems([...items, newTask]);
  };

  return (
    <div className={styles.todo_container}>
      <AddTaskComponent addTask={addTask}></AddTaskComponent>
      <TabsComponent filter={setFilter} counters={getCounters} />
      <ListComponent tasks={filteredItems} toggleTask={toggleTask} />
    </div>
  );
};
