import { useState } from "react";
import { initialTasks } from "../../data/TaskData/data";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function Task() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  // handler function
  const handleTaskAdd = (text) => {
    setTasks([...tasks, { id: getNextId(tasks), text: text, done: false }]);
  };

    const handleChangeTask = (task) => {
      const newTasks = tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      });
      setTasks(newTasks);
    };

    const handleTaskDelete = (taskId) => {
      const deleteTask = tasks.filter((t) => t.id !== taskId);
      setTasks(deleteTask);
    };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleTaskAdd} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleTaskDelete}/>
    </>
  );
}
