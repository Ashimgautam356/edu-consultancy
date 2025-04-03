"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GraduationCap, Menu, X, Home, FileText, Users, Video, MessageSquare, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function DashboardNavbar() {
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
            href="/dashboard"
            className={`${isActive("/dashboard") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors flex items-center`}
          >
            <Home className="h-4 w-4 mr-1" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/documents"
            className={`${isActive("/dashboard/documents") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors flex items-center`}
          >
            <FileText className="h-4 w-4 mr-1" />
            Documents
          </Link>
          <Link
            href="/dashboard/community"
            className={`${isActive("/dashboard/community") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors flex items-center`}
          >
            <Users className="h-4 w-4 mr-1" />
            Community
          </Link>
          <Link
            href="/dashboard/webinars"
            className={`${isActive("/dashboard/webinars") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors flex items-center`}
          >
            <Video className="h-4 w-4 mr-1" />
            Webinars
          </Link>
          <Link
            href="/dashboard/counseling"
            className={`${isActive("/dashboard/counseling") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors flex items-center`}
          >
            <MessageSquare className="h-4 w-4 mr-1" />
            Counseling
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Sarah Johnson</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex items-center space-x-2 mb-6">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <span className="font-medium">Sarah Johnson</span>
          </div>

          <div className="flex flex-col space-y-4">
            <Link
              href="/dashboard"
              className={`${isActive("/dashboard") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors flex items-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5 mr-2" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/documents"
              className={`${isActive("/dashboard/documents") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors flex items-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-5 w-5 mr-2" />
              Documents
            </Link>
            <Link
              href="/dashboard/community"
              className={`${isActive("/dashboard/community") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors flex items-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="h-5 w-5 mr-2" />
              Community
            </Link>
            <Link
              href="/dashboard/webinars"
              className={`${isActive("/dashboard/webinars") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors flex items-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Video className="h-5 w-5 mr-2" />
              Webinars
            </Link>
            <Link
              href="/dashboard/counseling"
              className={`${isActive("/dashboard/counseling") ? "text-primary" : "text-gray-700"} hover:text-primary transition-colors flex items-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Counseling
            </Link>

            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/dashboard/settings"
                className="text-gray-700 hover:text-primary transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </Link>
              <Link
                href="/auth/logout"
                className="text-gray-700 hover:text-primary transition-colors flex items-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogOut className="h-5 w-5 mr-2" />
                Log Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

