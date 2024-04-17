import React from 'react'
import InputField from '../components/InputField'
import Button from './Button'

const Salary = ({handleChange, handleClick}) => {
  return (
    <>
      <h4 className='text-lg font-medium mb-2'>Salaray</h4>
      <div>
        <Button onClickHandler={handleClick} value="hourly" title={"Hourly"}/>
        <Button onClickHandler={handleClick} value="monthly" title={"Monthly"}/>
        <Button onClickHandler={handleClick} value="yearly" title={"Yearly"}/>
        </div>

        <div>
        <label className='sidebar-label-container '>
        <input type="radio" name="test2" id="text" value="" onChange={handleChange} />
        <span className='checkmark'></span>Any
      </label>
      <InputField handleChange={handleChange} value={30} title='< 30000k' name='test2'/>
      <InputField handleChange={handleChange} value={50} title='< 50000k' name='test2'/>
      <InputField handleChange={handleChange} value={80} title='< 80000k' name='test2'/>
      <InputField handleChange={handleChange} value={100} title='< 100000k' name='test2'/>
        </div>

    </>
  )
}

export default Salary