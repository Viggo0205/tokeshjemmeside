'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white border-b border-gray-200 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            Toke's Auto
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">Hjem</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">Ydelser</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">Om</a>
            <a href="#reviews" className="text-gray-700 hover:text-gray-900 font-medium">Anmeldelser</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Kontakt</a>
          </div>

          <a href="tel:75823419" className="hidden md:block bg-gray-900 text-white px-5 py-2 font-medium hover:bg-gray-700">
            75 82 34 19
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-gray-200">
            <a href="#home" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Hjem</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Ydelser</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Om</a>
            <a href="#reviews" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Anmeldelser</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Kontakt</a>
            <a href="tel:75823419" className="block mt-3 bg-gray-900 text-white px-5 py-2 font-medium text-center">
              Ring: 75 82 34 19
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
