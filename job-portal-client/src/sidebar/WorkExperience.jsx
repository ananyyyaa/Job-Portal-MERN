import React from 'react'
import InputField from '../components/InputField'
const WorkExperience = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium'>Work Experience</h4>
      <div>
        <InputField handleChange={handleChange} value="" title="All" name="location" />
        <InputField handleChange={handleChange} value="london" title="Any Experience" name="location" />
        <InputField handleChange={handleChange} value="seattle" title="Internship" name="location" />
        <InputField handleChange={handleChange} value="madrid" title="Work Remotely" name="location" />
      </div>
    </div>
  )
}

export default WorkExperience