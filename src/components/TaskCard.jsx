import React from 'react'
import './TaskCard.scss'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'
// step 10 b - destructure  {title, tags}
// step 12 - destructure {handleDelete, index}
const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {/* <Tag tagName="HTML" />
          <Tag tagName="CSS" /> */}
          {/* step 10 b */}
          {
            tags.map((tag, index) => (<Tag key={index} tagName={tag} selected />))
          }
        </div>
        {/* step 12 onClick */}
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} alt="" className='delete_icon' />
        </div>
      </div>
    </article>
  )
}

export default TaskCard