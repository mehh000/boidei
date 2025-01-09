import DeskTopCategory from '@/components/deskTopCategory'
import Filter_books from '@/components/Filter_books'
import HeaderMessage from '@/components/header_message'
import Hero from '@/components/hero'
import Navber from '@/components/navber'
import Products from '@/components/Product/Products'
import React from 'react'

export default function Home() {
  return (
    <div>
      <HeaderMessage />
      <Navber />
      <Hero />
      <DeskTopCategory />
      <Filter_books />
      <Products />
    </div>
  )
}
