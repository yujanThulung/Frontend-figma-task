import React from 'react'

const SmallImage = (img, alt='image', className) => {
  return (
    <img 
    src={image} 
    alt={alt}
    className={`w-25 h-25 object-contain ${className}}`}/>
  )
}

export default SmallImage