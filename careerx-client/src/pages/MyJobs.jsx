import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MyJobs = () => {
    const email = "sabbir@zaylendigital.com"
    const [jobs, setJobs] = useState([])
    const [searchText, setSearchText] = useState('')

    const[isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:4000/myJobs/sabbir@zaylendigital.com`).then(res => res.json()).then(data => {
            setJobs(data)
        });
    }, [isLoading])
    
    const handleSearch = () => {
        const filter = jobs.filter(job => job.title.toLowerCase().includes(searchText.toLowerCase()) !== -1)

        setJobs(filter)
        setIsLoading(false)
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/deleteJob/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            if(data) {
                const remainingJobs = jobs.filter(job => job._id !== id)
                setJobs(remainingJobs)
            }
        })
    }

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div className='my-jobs-container'>
            <h1 className='text-center p-4 font-semibold text-2xl'>My Created Jobs</h1>
            <div className='search-box p-2, mb-2 text-center'>
                <input type='text' name="search" id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full mr-2'
                onChange={(e) => setSearchText(e.target.value)}/>
                <button className='bg-primary text-white font-semibold px-8 py-2 rounded-sm mb-4'>Search</button>

            </div>
            <section className="py-1 bg-blueGray-50">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-6">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <Link to="/post-job"><button className="bg-secondary text-white active:bg-primary text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post A New Job</button></Link>
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
Job No
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Job Title
                        </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Company Name
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Salary
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Edit
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Delete
                        </th>
          </tr>
        </thead>

        <tbody>
            {
                jobs.map((job, index) => (
                    <tr key={index}>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {index + 1}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {job.jobTitle}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {job.companyName}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {job.minPrice} - {job.maxPrice}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <Link to={`/edit-job/${job?._id}`}><button className="bg-green-500 text-white active:bg-green-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Edit</button></Link>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <button onClick={() => handleDelete(job._id)} className="bg-red-500 text-white active:bg-red-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Delete</button>
                        </td>
                    </tr>
                ))
            
            }
          
        </tbody>

      </table>
    </div>
  </div>
</div>
</section>

    </div>
    </div>
    </>
  )
}

export default MyJobs