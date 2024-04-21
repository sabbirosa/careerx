import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleChange}) => {
  return (
    <>
    <h4 className='text-lg font-medium mb-2'>Location</h4>
    <div>
      <label className='sidebar-label-container '>
        <input type="radio" name="test" id="text" value="" onChange={handleChange} />
        <span className='checkmark'></span>All
      </label>
      <InputField handleChange={handleChange} value='Dhaka' title='Dhaka' name='test'/>
      <InputField handleChange={handleChange} value='Sylhet' title='Sylhet' name='test'/>
      <InputField handleChange={handleChange} value='Chittagong' title='Chittagong' name='test'/>
      <InputField handleChange={handleChange} value='Rajshahi' title='Rajshahi' name='test'/>

    </div>
    </>
  )
}

export default Location