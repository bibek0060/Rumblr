import Link from 'next/link'

export default function Navigation() {
  // This would typically come from your auth context/state
  const isSignedIn = false; // Change this to true to test the signed-in state

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Logo/Home Button */}
            <Link href="/" className="flex items-center">
              <span className="font-bold text-gray-900">RUMBLR</span>
            </Link>
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Rumblr"
                className="w-96 pl-10 pr-4 py-1.5 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-sm"
              />
              <span className="absolute left-3 top-2 text-gray-400">🔍</span>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex items-center space-x-4">
            <Link href="/popular" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm">
              <span className="text-lg">🔥</span>
              <span>Popular</span>
            </Link>
            <Link href="/latest" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm">
              <span className="text-lg">🕒</span>
              <span>Latest</span>
            </Link>
            <Link href="/communities" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm">
              <span className="text-lg">👥</span>
              <span>Communities</span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link href="/create-post" className="bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-colors text-sm font-medium">
              Create Post
            </Link>
            <Link href="/notifications" className="relative text-gray-600 hover:text-gray-900">
              <span className="text-lg">🔔</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </Link>
            <Link href="/messages" className="relative text-gray-600 hover:text-gray-900">
              <span className="text-lg">✉️</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
            </Link>
            {isSignedIn ? (
              <Link href="/profile" className="flex items-center space-x-2">
                <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  U
                </div>
                <span className="text-gray-700 font-medium text-sm">User Name</span>
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  Login
                </Link>
                <Link href="/signup" className="bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-colors text-sm font-medium">
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