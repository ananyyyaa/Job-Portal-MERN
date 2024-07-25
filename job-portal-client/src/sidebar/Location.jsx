import React from 'react';
import InputField from '../components/InputField';

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className='text-lg font-medium'>Location</h4>
      <div>
        <InputField handleChange={handleChange} value="" title="All" name="location" />
        <InputField handleChange={handleChange} value="london" title="London" name="location" />
        <InputField handleChange={handleChange} value="seattle" title="Seattle" name="location" />
        <InputField handleChange={handleChange} value="madrid" title="Madrid" name="location" />
        <InputField handleChange={handleChange} value="boston" title="Boston" name="location" />
      </div>
    </div>
  );
};

export default Location;
