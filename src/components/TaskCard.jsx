import React from 'react'
import './TaskCard.scss'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'

const TaskCard = ({title, tags}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {/* <Tag tagName="HTML" />
          <Tag tagName="CSS" /> */}
          {
            tags.map((tag, index) => (<Tag key={index} tagName={tag} selected/>))
          }
        </div>
        <div className="task_delete">
          <img src={deleteIcon} alt="" className='delete_icon' />
        </div>
      </div>
    </article>
  )
}

export default TaskCard