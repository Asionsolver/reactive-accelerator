/* eslint-disable react/prop-types */
import SingleTask from "./SingleTask";


export default function TaskList({tasks}){
  return (
    <ul>
        {tasks.map((task) => (
            <SingleTask key={task.id}  task={task} />
        ))}
       
    </ul>
  )
}
