import React from 'react'

const InputField = ({handleChange, value, title, name}) => {
  return (
    <label>
        <label className='sidebar-label-container '>
        <input type="radio" name={name} id="text" value={value} onChange={handleChange} />
        <span className='checkmark'></span>{title}
      </label>

      
    </label>
  )
}

export default InputField