import React from 'react';
import Button from './Button'; // Import Button component
import InputField from '../components/InputField';

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div className='mb-4'>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="yearly" title="Yearly" />
      </div>
      <label className='sidebar-label-container' >
        <input type="radio" name="test" id="test" value= "" onChange={handleChange} />
      </label>

      <InputField handleChange={handleChange} value={30} title="<30000k" name="text2"/>
      <InputField handleChange={handleChange} value={50} title="<50000k" name="text2"/>
      <InputField handleChange={handleChange} value={80} title="<80000k" name="text2"/>
      <InputField handleChange={handleChange} value={100} title="<1000000k" name="text2"/> </div>
      
  );
}

export default Salary;
