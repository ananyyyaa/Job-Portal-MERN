import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
<div>
      <h4 className='text-lg font-medium'>Type of Employment</h4>
      <div>
        <InputField handleChange={handleChange} value="" title="Any" name="location" />
        <InputField handleChange={handleChange} value="Full-Time" title="Full-Time" name="location" />
        <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="location" />
        <InputField handleChange={handleChange} value="Part-Time" title="Part-Time" name="location" />
      </div>
    </div>  )
}

export default EmploymentType