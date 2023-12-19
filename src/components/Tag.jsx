import React from 'react'
import './Tag.scss'

// step 8
const Tag = ({tagName, selectTag, selected}) => {
  const tagStyle = {
    HTML: {backgroundColor: "#fda821"},
    CSS: {backgroundColor: "#54f1bf"},
    JavaScript: {backgroundColor: "#ffd12c"},
    React: {backgroundColor: "#4cdafc"},
    default: {backgroundColor: "#f9f9f9"}
  }
  // console.log("props",props)
  return (
    <button 
      type="button"
      className="tag" 
      // step 8
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)} 
    >
      {tagName}
    </button>
  )
}

export default Tag