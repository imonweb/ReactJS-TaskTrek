import React from 'react'
import Todo from "../assets/direct-hit.png"
import './TaskColumn.scss'
import TaskCard from './TaskCard'

const TaskColumn = ({title, icon, tasks, status}) => {
  // console.log(Todo);

  // const {title, icon} = props
  return (
    <section className="task_column">
      <h2 className='task_column_heading'><img className="task_column_icon" src={icon} alt="" />{title}</h2>
      {/* <TaskCard /> */}
      {
        tasks.map((task, index) => task.status === status && 
          <TaskCard 
            key={index} 
            title={task.task} 
            tags={task.tags}
          />)
      }
      
    </section>
  )
}

export default TaskColumn