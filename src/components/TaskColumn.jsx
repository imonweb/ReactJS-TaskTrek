import React from 'react'
import Todo from "../assets/direct-hit.png"
import './TaskColumn.scss'
import TaskCard from './TaskCard'
// destructure - tasks, status
// step 12 - handleDelete
const TaskColumn = ({title, icon, tasks, status, handleDelete}) => {
  // console.log(Todo);

  // const {title, icon} = props
  return (
    <section className="task_column">
      <h2 className='task_column_heading'><img className="task_column_icon" src={icon} alt="" />{title}</h2>
      {/* <TaskCard /> */}

      {/* Step 10 - then go to TaskCard.jsx after*/}
      {
        tasks.map((task, index) => task.status === status && 
          <TaskCard 
            key={index} 
            title={task.task} 
            tags={task.tags}
            // step 12 add - handleDelete and index then go to TaskCard.jsx
            handleDelete={handleDelete}
            index={index}
          />)
      }
      
    </section>
  )
}

export default TaskColumn