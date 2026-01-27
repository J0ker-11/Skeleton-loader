import React from 'react'

const SkeletonCard = () => {
  return (
     <div className="w-[300px] p-4 border rounded-lg animate-pulse">
      
      {/* Image placeholder */}
      <div className="h-40 bg-gray-300 rounded mb-4"></div>

      {/* Title placeholder */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

      {/* Description placeholder */}
      <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>

    </div>
  )
}

export default SkeletonCard