import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
      <h1 className='text-5xl font-bold text-primary mb-3'>Find your new Job today</h1>
      <p className='text-lg text-black/70 mb-8'>Thousands of jobs in the computer, engineering, and technology sectors are waiting for you</p>
      <form>
        <div className='flex flex-col md:flex-row justify-start md:gap-0 gap-4'>
          <div className='flex md:rounded-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full relative'>
            <input 
              type='text' 
              name='title' 
              id='title' 
              placeholder='What position you are looking for?' 
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' 
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className='absolute top-2.5 left-2 text-gray-400' />
          </div>

          <div className='flex md:rounded-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full relative'>
            <input 
              type='text' 
              name='location' 
              id='location' 
              placeholder='Location' 
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' 
            />
            <FiMapPin className='absolute top-2.5 left-2 text-gray-400' />
          </div>
          <button type='submit' className='bg-blue-500 py-2 px-8 text-white md:rounded-s-none rounded'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;