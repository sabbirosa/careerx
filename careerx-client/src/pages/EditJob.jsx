 import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from 'react-router-dom';
import CreateableSelect from 'react-select/creatable';


 const EditJob = () => {
  const {id} = useParams();

  const {_id, jobTitle, companyName, minPrice, maxPrice, salaryType, jobLocation, postingDate, companyLogo, jobDescription, postedBy, skills, experienceLevel, employmentType} = useLoaderData();

  const [selecttedOption, setSelectedOption] = useState(null)

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => {
      data.skills = selecttedOption
      fetch(`http://localhost:4000/updateJob/${id}`,
      {method: "PATCH",
       headers: {'content-type': 'application/json'},
       body: JSON.stringify(data)}).then(res => res.json()).then((result) => {
          console.log(result)
      })
    }

    const options = [
      { value: 'html', label: 'HTML' },
      { value: 'css', label: 'CSS' },
      { value: 'javascript', label: 'JavaScript' },
      { value: 'react', label: 'React' },
      { value: 'nodejs', label: 'NodeJs' },
      { value: 'express', label: 'Express' },
      { value: 'mongodb', label: 'MongoDB' },
      { value: 'nextjs', label: 'NextJs' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'python', label: 'Python' },
      { value: 'django', label: 'Django' },
      { value: 'flask', label: 'Flask' },
      { value: 'java', label: 'Java' },
      { value: 'spring', label: 'Spring' },
      { value: 'c', label: 'C' },
      { value: 'c++', label: 'C++' },
      { value: 'c#', label: 'C#' },
      { value: 'php', label: 'PHP' },
      { value: 'laravel', label: 'Laravel' }
    ]

   return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 lg:px-16'>
    <div className='bg-[#FAFAFA] py-10 px-4 '>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            
            {/* First Row  */}
            <div className='create-job-flex'>
                
                
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Job Title</label>
                    <input className='create-job-input' type="text" defaultValue={jobTitle} {...register("jobTitle")} />
                </div>

                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Company Name</label>
                    <input defaultValue={companyName} className='create-job-input' type="text" placeholder="Zaylen Digital" {...register("companyName")} />
                </div>
            </div>

            {/* Second Row  */}
            <div className='create-job-flex'>
    
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Minimum Salary</label>
                    <input defaultValue={minPrice} className='create-job-input' type="text" placeholder="20k BDT" {...register("minPrice")} />
                </div>

                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Maximum Salary</label>
                    <input defaultValue={maxPrice} className='create-job-input' type="text" placeholder="100k BDT" {...register("maxPrice")} />
                </div>
            </div>

            {/* Third Row  */}
            <div className='create-job-flex'>
                
                
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Salary Type</label>
                    <select {...register("salaryType")} className='create-job-input'>
                        <option value={salaryType}>{salaryType}</option>
                        <option value="Hourly">Hourly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>

                </div>

                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Job Location</label>
                    <input defaultValue={jobLocation} className='create-job-input' type="text" placeholder="Dhaka" {...register("jobLocation")} />
                </div>
            </div>

            {/* Fourth Row  */}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Job Posting Date</label>
                    <input defaultValue={postingDate} className='create-job-input' type="date" placeholder="2023-03-27" {...register("postingDate")} />
                </div>
                
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Experience Level</label>
                    <select {...register("experienceLevel")} className='create-job-input'>
                        <option value={experienceLevel}>{experienceLevel}</option>
                        <option value="Freasher">Freasher</option>
                        <option value="Internship">Internship</option>
                        <option value="Work Remotely">Work Remotely</option>
                    </select>
                </div>
            </div>
            
            {/* Fifth Row  */}
            <div className=''>
                <label className='block mb-2 text-lg'>Required Skill Sets</label>
                <CreateableSelect className='create-job-input py-4' defaultValue={skills} onChange={setSelectedOption} options={options} isMulti/>
            </div>

            {/* Sixth Row  */}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Company Logo</label>
                    <input defaultValue={companyLogo} className='create-job-input' type="url" placeholder="https://zaylendigital.com/img/200x200/zaylen-digital-logo.png" {...register("companyLogo")} />
                </div>
                
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Employment Type</label>
                    <select {...register("employmentType")} className='create-job-input'>
                        <option value={employmentType}>{employmentType}</option>
                        <option value="Full-Time (Onsite)">Full-Time (Onsite)</option>
                        <option value="Part-Time (Onsite)">Part-Time (Onsite)</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
            </div>

            {/* Seventh Row  */}
            <div className=''>
                <label className='block mb-2 text-lg'>Job Description</label>
                <textarea defaultValue={jobDescription} className='h-32 w-full pl-3 py-3 focus:outline-none placeholder:text-gray-400' placeholder="Job Description" {...register("jobDescription")} />
            </div>

            {/* Eighth Row  */}
            <div className=''>
                <label className='block mb-2 text-lg'>Posted By</label>
                <input defaultValue={postedBy} className='create-job-input' type="email" placeholder="jhon.doe@gmail.com" {...register("postedBy")} />
                
            </div>


            <input type="submit" className='block mt-12 bg-primary text-white font-semibold px-8 py-2 rounded-md cursor-pointer' />
            
        </form>
    </div>
</div>
   )
 }
 
 export default EditJob