import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Banner = ({query, handleInputChange}) => {

    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 flex justify-center">
    <div className="w-full max-w-xl">
        <h1 className='text-5xl font-bold text-primary-text mb-3'>Find your <span className='text-primary'>new job</span> today</h1>
        <p className='text-lg text-black/70 mb-8'>Thousands of jobs in the computer engineering and technology sectors are waiting for you.</p>
        <form>
            <div className='flex justify-start md:flex-row flex-col md-gap-2 gap-4'>
                <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset focus-within:ring-1 focus-within:ring-inset focus-within:ring-primary  w-full'>
                    <input type="text" name="job-title" id="job-title"
                    placeholder='What position are you looking for?'
                    onChange={handleInputChange}
                    value={query}
                    className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-grey-400 focus:right-0 sm:text-sm sm:leading-6' />
                    <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
                </div>
                
                <button type='submit' className='bg-primary py-2 px-8 text-white md:rounded-s none rounded'>
                Search
                </button>
            </div>
        </form>
    </div>
</div>

    )
}

export default Banner