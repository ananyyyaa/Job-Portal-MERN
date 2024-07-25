import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Jobs from '../Pages/Jobs';
import Sidebar from '../sidebar/Sidebar';
import NewsLetter from '../components/NewsLetter'; 

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the jobs:", error);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = jobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, salaryType, employmentType , experienceLevel , postingDate}) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        postingDate >= selected ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
    }

    return filteredJobs;
  };

  const result = filteredData(jobs, selectedCategory, query);
  const totalJobs = result.length;

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className='col-span-2 bg-white p-4 rounded-sm'>
          <h3>{totalJobs} Jobs</h3>
          {
            isLoading ? (
              <p>Loading....</p>
            ) : totalJobs > 0 ? (
              <Jobs result={result} />
            ) : (
              <p>No Data Found</p>
            )
          }
        </div>
        <div className='bg-white p-4 rounded'><NewsLetter/></div>
      </div>
    </div>
  );
}

export default Home;
