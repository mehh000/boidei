'use client'

import React, { useState } from 'react'

function DeskTopCategory() {
    const [activeCategory, setActiveCategory] = useState(null);

    const categoryMenu = [
        'Fiction',
        'Non-Fiction', 
        'Academic',
        'Children',
        'Religious',
    ];

    return (
        <div className="w-full bg-orange-300 mt-5 mb-6 ">
            <div className="flex flex-row">
                {categoryMenu.map((category, index) => (
                    <button
                        key={index}
                        className={`flex-1 p-3 text-center transition-colors duration-200 
                            ${activeCategory === index 
                                ? 'bg-orange-500 text-white' 
                                : 'hover:bg-orange-400'
                            }`}
                        onClick={() => setActiveCategory(index)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default DeskTopCategory