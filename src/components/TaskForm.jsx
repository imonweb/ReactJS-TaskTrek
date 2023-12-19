import React, {useState} from 'react'

import './TaskForm.scss'
import Tag from './Tag'
// 9th step - {setTasks}
const TaskForm = ({setTasks}) => {
  /*  Single input - individual state vars for form fields */
  /*
  // 1st step
  const [task, setTask] = useState("");
  console.log(task);

  //  2nd step
  const handleTaskChange = e => {
    setTask(e.target.value)
  }

  // 3rd step
  const [status, setStatus] = useState("todo");
  const handleStatusChange = e => {
    setStatus(e.target.value)
  }
  console.log(task, status);
  */

  /*  Handle multiple input with single onchange function */
  // 4th step
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: []
  })

  // 8th step  -> go to Tag.jsx after
  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag)
  }

  // 7th step
  const selectTag = (tag) => {
    // console.log(tag)
    if(taskData.tags.some(item => item === tag)){
      const filterTags = taskData.tags.filter(item => item !== tag)
      setTaskData(prev => {
        return {...prev, tags: filterTags}
      })
    } else {
      setTaskData(prev => {
        return {...prev, tags: [...prev.tags, tag]}
      })
    }
  }
  // remove log after step 9
  // console.log(taskData.tags)

  // 4th step
  const handleChange = (e) => {
    // console.log(e.target);
    // 4th step
    // const name = e.target.name
    // const value = e.target.value
    // console.log(name,value);

    // 5th step - destructuring
    const {name, value} = e.target

    setTaskData((prev) => {
      return {...prev, [name]: value}
    })
  }
  // console.log(taskData);

  // 6th step
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(taskData);
    // 9th step b
    setTasks((prev) => {
      return [...prev, taskData]
    })
    // Step 11 - clear task selected
    setTaskData({
      task: "",
      status: "todo",
      tags: []
    })
  }

 
  return (
    <header className='app_header'>

      {/***** Form start here ******/}
      {/* 6th step */}
      <form onSubmit={handleSubmit} >
        <input 
          // 4th step = name='task' and onchange={handleChange}
          name='task'
          type="text" 
          // step 11 clear button on select - value={taskData.task}
          value={taskData.task}
          className='task_input' 
          placeholder='Enter your task'
          // 1st step
          // onChange={(e) => setTask(e.target.value)}
          // 2nd step
          // onChange={(e) => handleTaskChange(e)}
          // 4th step
          onChange={handleChange} 
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag 
              tagName="HTML" 
              selectTag={selectTag} 
              // 8th step -> step 9 go to App.js
              selected={checkTag("HTML")} 
            />
            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
            <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")} />
            <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
          </div>

          <div>
            {/* Select status */}
            <select 
              // 4th step
              name='status'
              className="task_status" 
              // 3rd step
              // onChange={handleStatusChange}
              // 4th step
              onChange={handleChange}
              // step 11 clear selected option select- value={taskData.status}
              value={taskData.status}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">+ Add Task</button>
          </div>

        </div>
      </form>
      {/***** Form end here ******/}
    </header>
  )
}

export default TaskForm