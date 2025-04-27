'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { SearchBar } from '@/components/SearchBar'
import { Button } from '@/components/ui/button'
import { Home, Plus, User, MessageSquare, Users, Bell } from 'lucide-react'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Create', href: '/create-post', icon: Plus },
  { name: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'Communities', href: '/communities', icon: Users },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Notifications', href: '/notifications', icon: Bell },
]

export default function Navigation() {
  const pathname = usePathname()
  const [notificationCount, setNotificationCount] = useState(0)

  useEffect(() => {
    const fetchNotificationCount = async () => {
      try {
        const response = await fetch('/api/notifications')
        if (response.ok) {
          const notifications = await response.json()
          const unreadCount = notifications.filter((n: any) => !n.read).length
          setNotificationCount(unreadCount)
        }
      } catch (error) {
        console.error('Failed to fetch notification count:', error)
      }
    }

    fetchNotificationCount()
  }, [])

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Rumblr
          </Link>
        </div>

        {/* Search Bar - Only visible on desktop */}
        <div className="hidden md:block flex-1 max-w-2xl mx-8">
          <SearchBar />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors relative',
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
                title={item.name}
              >
                <item.icon className="h-5 w-5" />
                {item.name === 'Notifications' && notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
                <span className="sr-only md:not-sr-only md:ml-2">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
} 