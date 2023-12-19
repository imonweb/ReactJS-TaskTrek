import React, {useState, useEffect} from 'react'

import "./App.scss"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import TodoIcon from './assets/direct-hit.png'
import DoingIcon from './assets/glowing-star.png'
import DoneIcon from './assets/check-mark-button.png'

// step 13 - local storage (required useEffect hook)
const oldTasks = localStorage.getItem("tasks")
// console.log(oldTasks)

const App = () => {
  // 9th step - Displaying the task cards
  // const [tasks, setTasks] = useState([])
  // console.log("tasks", tasks)
  // step 13
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

  // step 13 - localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // step 12 - deleting single task
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  return (
    <div className='app'>
      {/* step 9 */}
      <TaskForm setTasks={setTasks}/>
    
      <main className='app_main'>
        {/* step 9 - tasks={tasks} status="todo" and go to TaskColumn.jsx for step 10*/}
        <TaskColumn 
          title="To do" 
          icon={TodoIcon} 
          tasks={tasks} 
          status="todo" 
          // Step 12 - pass new props then go to TaskColumn.jsx after
          handleDelete={handleDelete}
        />
        <TaskColumn 
          title="Doing" 
          icon={DoingIcon} 
          tasks={tasks} 
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn 
          title="Done" 
          icon={DoneIcon} 
          tasks={tasks} 
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  )
}

export default App