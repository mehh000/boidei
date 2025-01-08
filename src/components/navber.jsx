'use client'

import React from 'react'

function Navber() {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-[#fd7e14]">
              Booktionary
            </a>
          </div>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="w-64 px-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#fd7e14]"
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            {/* Favorite Icon */}
            <button className="p-2 hover:text-[#fd7e14]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            {/* Cart Icon */}
            <div className="relative">
              <button className="p-2 hover:text-[#fd7e14]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-[#fd7e14] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-4">
            {/* Menu Icon */}
            <button className="p-2 hover:text-[#fd7e14]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-[#fd7e14]">
              Booktionary
            </a>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:text-[#fd7e14]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="relative">
                <button className="p-2 hover:text-[#fd7e14]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-[#fd7e14] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Search Bar in Mobile */}
          <div className="px-4 pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full px-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#fd7e14]"
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navber