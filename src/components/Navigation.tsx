'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Navigation() {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary-600">Rumblr</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/communities" className="text-gray-600 hover:text-primary-600">
              Communities
            </Link>
            {isLoading ? (
              <div className="text-gray-600">Loading...</div>
            ) : session ? (
              <>
                <Link href="/profile" className="text-gray-600 hover:text-primary-600">
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-gray-600 hover:text-primary-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-600 hover:text-primary-600">
                  Login
                </Link>
                <Link href="/signup" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 