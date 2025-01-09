'use client'

import React from 'react'
import Image from 'next/image'

function Card() {
  return (
    <div className="w-[250px] bg-white rounded-lg shadow-md">
      <div className="relative h-[200px] w-full">
        <Image
          src="/book.jpg"
          alt="Book Cover"
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">The Great Adventure</h3>
        
        <div className="flex items-center mt-2">
          <span className="text-lg font-bold text-orange-500">$19.99</span>
          <span className="ml-2 text-sm text-gray-500 line-through">$29.99</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card