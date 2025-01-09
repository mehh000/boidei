'use client'

import React, { useState } from 'react'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle subscribe logic here
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Your trusted online bookstore offering a wide selection of books across all genres.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Books</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Book Street</li>
              <li>Reading City, RC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@bookstore.com</li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and exclusive offers!</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Bookstore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
