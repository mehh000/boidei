'use client'

import React from 'react'

function Filter_books() {
  return (
    <div className="pl-10 pr-10">
      <div className="flex justify-between items-center">
        <button className="flex items-center gap-2 hover:text-[#fd7e14]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Filter
        </button>
        
        <button className="text-[#fd7e14] hover:underline">
          View All
        </button>
      </div>
    </div>
  )
}

export default Filter_books