"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-600 flex items-center space-x-2 gap-3">
          <Image src="/Logo.svg" alt="EcoSphere" width={50} height={50} />
          <>EcoSphere</>
        </Link>

        <Button
          className="lg:hidden focus:outline-none bg-green-600 hover:bg-green-700"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {!isMobileMenuOpen ? <AlignJustify size={24} /> : <X size={24} />}
          
        </Button>

        {/* Full Navigation Menu */}
        <ul className="hidden lg:flex space-x-6">
          {/* <li><Link href="/" className="text-gray-600 hover:text-green-600">Home</Link></li>
          <li><Link href="/about" className="text-gray-600 hover:text-green-600">About Us</Link></li>
          <li><Link href="/features" className="text-gray-600 hover:text-green-600">Features</Link></li>
          <li><Link href="/blog" className="text-gray-600 hover:text-green-600">Blog</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-green-600">Contact</Link></li> */}
        </ul>

        {/* Get Started Button */}
        <Button
          variant="outline"
          className="hidden lg:block text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
        >
          Get Started
        </Button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-4 py-6">
            <li><Link href="/" className="text-gray-600 hover:text-green-600">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-green-600">About Us</Link></li>
            <li><Link href="/features" className="text-gray-600 hover:text-green-600">Features</Link></li>
            <li><Link href="/blog" className="text-gray-600 hover:text-green-600">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-green-600">Contact</Link></li>
            <li>
              <Button
                variant="outline"
                className="w-full text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
