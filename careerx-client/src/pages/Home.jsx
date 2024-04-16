import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Jobs from '../pages/Jobs';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json").then(res => res.json()).then(data => {
            setJobs(data)
        })
    }, [])

    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        setQuery(e.target.value)   
    }

    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

    const hangleChange = (e) => {
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

    return filteredJobs.map((data, index) => <Card key={index} data={data}/> )
    }

    const result = filteredData(jobs, selectedCategory, query)

    return (
      <>
      <Banner query={query} handleInputChange={handleInputChange}/>

      <div>
        <Jobs result={result}/>
      </div>
      </>
    )
}

export default Home