"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">EduConsult</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`${isActive("/") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors`}
          >
            Home
          </Link>
          <Link href="#destinations" className="text-gray-700 hover:text-primary transition-colors">
            Destinations
          </Link>
          <Link href="#process" className="text-gray-700 hover:text-primary transition-colors">
            Process
          </Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#blog" className="text-gray-700 hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex space-x-3">
          <Button variant="outline" asChild>
            <Link href="/auth/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`${isActive("/") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#destinations"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="#process"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#blog"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

