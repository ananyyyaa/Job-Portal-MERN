import React from 'react';
import InputField from '../components/InputField'; // Adjust the path as needed

const JobPostingData = ({ handleChange }) => {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

    return (
        <div>
            <h4 className='text-lg font-medium'>Date of Posting</h4>
            <div>
                <InputField handleChange={handleChange} value="" title="All time" name="date" />
                <InputField handleChange={handleChange} value={twentyFourHoursAgoDate} title="Last 24 hours" name="date" />
                <InputField handleChange={handleChange} value={sevenDaysAgoDate} title="Last 7 days" name="date" />
                <InputField handleChange={handleChange} value={thirtyDaysAgoDate} title="Last month" name="date" />
            </div>
        </div>
    );
};

export default JobPostingData;
