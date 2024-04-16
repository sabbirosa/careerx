import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
    <div>
    <h3 className='text-lg font-bold mt-2 mb-2 ml-6 text-primary'>{result.length} Jobs Found</h3>
    </div>
    <section className='card-container'>
      {result}
    </section>
    </>
  )
}

export default Jobs