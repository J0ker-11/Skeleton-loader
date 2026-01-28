import React from 'react'

const Card = ({title,image,description}) => {
  return (
    <div className="w-[600px] p-4 border rounded-lg">
      
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover rounded mb-4"
      />

      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>

    </div>
  )
}

export default Card