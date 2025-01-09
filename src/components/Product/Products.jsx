'use client'

import React from 'react'
import Card from './Card'

function Products() {
    return (
        <div
            className="flex items-center justify-center gap-2 flex-wrap pl-10 pr-10 w-full">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Products