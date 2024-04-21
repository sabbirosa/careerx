import React from 'react'
import { FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Card = ({data, index}) => {

    const {_id, companyName, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType, description, jobTitle} = data

    return (
        <section className='card'>
            <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
                <img src={companyLogo} alt={companyName} width={100} height={100} />
                <div>
                    <h4 className='text-primary-text mb-1'>{companyName}</h4>
                    <h3 className='text-lg font-semibold mb-2 text-primary-text'>{jobTitle}</h3>
                    <div className='text-primary-text/60 text-base flex flex-wrap gap-2 mb-2'>
                        <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
                        <span className='flex items-center gap-2'><FiClock/>{salaryType}</span>
                        <span className='flex items-center gap-2'><FiDollarSign/>{minPrice}-{maxPrice}</span>
                    </div>
                    <p className='text-base text-primary-text/70'>{description}</p>
                </div>
            </Link>
        </section>
    )
}

export default Card