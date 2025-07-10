import React from 'react'

const TestimonialHeader = ({subheading, heading}) => {
  return (
    <div>
        <h3 className="font-outfit font-normal text-[24px]">
            {subheading}
        </h3>
        <h2 className='text-[32px] font-bold font-nohemi'>
            {heading}
        </h2>
    </div>
  )
}

export default TestimonialHeader