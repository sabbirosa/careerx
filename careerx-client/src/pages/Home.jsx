import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Jobs from '../pages/Jobs';
import Sidebar from '../sidebar/Sidebar';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        setIsLoading(true);
        fetch("jobs.json").then(res => res.json()).then(data => {
            setJobs(data);
            setIsLoading(false);
        })
    }, [])

    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        setQuery(e.target.value)   
    }

    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

    const handleChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    const handleClick = (e) => {
        setSelectedCategory(e.target.value)
    }

    const filteredData = (jobs, selected, query) => {
      let filteredJobs = jobs;

      if (query) {
        filteredJobs = filteredItems;
      }

      if (selected) {
        filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => (
          jobLocation.toLowerCase() === selected.toLowerCase() || parseInt(maxPrice) === parseInt(selected) || salaryType.toLowerCase() === selected.toLowerCase() || employmentType.toLowerCase() === selected.toLowerCase() 
        ));
        console.log(filteredJobs);
    }
    const {startIndex, endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, index) => <Card key={index} data={data}/> )
    }

    const calculatePageRange = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = currentPage * itemsPerPage;
      return {startIndex, endIndex}
    }

    const nextPage = () => {
      if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    }

    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }

    const result = filteredData(jobs, selectedCategory, query)

    return (
      <>
      <Banner query={query} handleInputChange={handleInputChange}/>

      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        <div className='bg-white p-8 rounded'><Sidebar handleChange={handleChange} handleClick={handleClick}/></div>
        <div className='col-span-3 bg-white p-4 rounded'>
        {
          isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? <Jobs result={result}/> : <>
          <h3 className='text-lg font-bold mt-2 mb-2 ml-6 text-red-400'>{result.length} Jobs Found</h3>
          <p className='ml-6'>No jobs found</p>
          </>
        }

        {
          result.length > 0 ? <div className='flex justify-center mt-4 space-x-8 text-primary-text/80'>
          <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline' >Previous</button>
          <span>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
        </div> : null

        }
        
        </div>
        
        
      </div>
      </>
    )
}

export default Home