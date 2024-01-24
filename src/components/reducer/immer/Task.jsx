import { useImmerReducer } from "use-immer";
import { initialTasks } from "../../../data/TaskData/data";
import taskReducer from "../../../reducers/taskReducer";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function Tasks() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  const handleTaskAdd = (text) => {
    dispatch({
      type: "added",
      text,
      id: getNextId(tasks),
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleTaskDelete = (taskId) => {
    dispatch({
      type: "deleted",
      taskId,
    });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleTaskAdd} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleTaskDelete}
      />
    </>
  );
}
