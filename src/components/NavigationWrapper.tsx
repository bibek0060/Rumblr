'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'

// List of routes where navigation should be hidden
const authRoutes = ['/login', '/signup', '/forgot-password', '/reset-password']

export default function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const shouldShowNavigation = !authRoutes.includes(pathname)

  return (
    <div className="min-h-screen bg-gray-50">
      {shouldShowNavigation && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
          <Navigation />
        </div>
      )}
      <main className={shouldShowNavigation ? 'pt-16' : ''}>
        {children}
      </main>
    </div>
  )
} 