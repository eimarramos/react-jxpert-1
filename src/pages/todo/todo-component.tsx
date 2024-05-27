import { useCallback, useState } from "react";
import { Tasks } from "../../data/tasks-data";
import { ListComponent } from "./components/list/list-component";
import { TabsComponent } from "./components/list-tabs/list-tabs-components";
import { Task } from "../../types/task";
import { AddTaskComponent } from "./components/add-task/add-task-component";

export const TodoComponent: React.FC = () => {
  const [items, setItems] = useState<Task[]>(Tasks);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const filteredItems = items.filter((item) => {
    if (filter === "completed") return item.isDone;
    if (filter === "pending") return !item.isDone;
    return true;
  });

  const toggleTask = useCallback((id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }, []);

  return (
    <div>
      <AddTaskComponent></AddTaskComponent>
      <TabsComponent filter={setFilter} />
      <ListComponent tasks={filteredItems} toggleTask={toggleTask} />
    </div>
  );
};
