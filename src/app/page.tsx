export default function Feed() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Side Menu */}
      <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-4">
        {/* User Profile */}
        <div className="mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              U
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">User Name</h3>
              <p className="text-sm text-gray-500">@username</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded hover:bg-gray-100 transition-colors">
            <span className="text-xl">🏠</span>
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded hover:bg-gray-100 transition-colors">
            <span className="text-xl">🔍</span>
            <span>Explore</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded hover:bg-gray-100 transition-colors">
            <span className="text-xl">🔔</span>
            <span>Notifications</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded hover:bg-gray-100 transition-colors">
            <span className="text-xl">✉️</span>
            <span>Messages</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded hover:bg-gray-100 transition-colors">
            <span className="text-xl">🔖</span>
            <span>Bookmarks</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded hover:bg-gray-100 transition-colors">
            <span className="text-xl">👥</span>
            <span>Communities</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 p-2 rounded hover:bg-gray-100 transition-colors">
            <span className="text-xl">⚙️</span>
            <span>Settings</span>
          </a>
        </nav>

        {/* Post Button */}
        <button className="w-full mt-8 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium">
          Create Post
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="max-w-3xl mx-auto">
          {/* Create Post Section */}
          <div className="bg-white rounded-md shadow-sm p-4 mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                U
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="Create Post"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 min-h-[80px] resize-none text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>
            
            {/* Post Options */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <span className="text-xl">📷</span>
                  <span>Image</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <span className="text-xl">🔗</span>
                  <span>Link</span>
                </button>
              </div>
              <button className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600 transition-colors text-sm font-medium">
                Post
              </button>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="space-y-4">
            {/* Sample Post 1 */}
            <div className="bg-white rounded-md shadow-sm">
              {/* Post Header */}
              <div className="p-3 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    J
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">John Doe</h3>
                    <p className="text-xs text-gray-500">Posted by u/johndoe • 2 hours ago</p>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-3">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Just finished building my first Next.js application!
                </h2>
                <p className="text-gray-700 text-sm mb-3">
                  The developer experience is amazing. The hot reloading and TypeScript support make development so much smoother.
                </p>
                {/* Post Image */}
                <div className="mb-3 rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/600x400" 
                    alt="Post image" 
                    className="w-full"
                  />
                </div>
                {/* Post Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">#nextjs</span>
                  <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">#webdev</span>
                  <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">#coding</span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center space-x-1">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <span className="text-xl">⬆️</span>
                    </button>
                    <span className="text-sm font-medium">1.2k</span>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <span className="text-xl">⬇️</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-1 hover:bg-gray-200 rounded px-2 py-1">
                    <span className="text-xl">💬</span>
                    <span className="text-sm">245 Comments</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:bg-gray-200 rounded px-2 py-1">
                    <span className="text-xl">🔄</span>
                    <span className="text-sm">Share</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:bg-gray-200 rounded px-2 py-1">
                    <span className="text-xl">🔖</span>
                    <span className="text-sm">Save</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sample Post 2 */}
            <div className="bg-white rounded-md shadow-sm">
              {/* Post Header */}
              <div className="p-3 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    J
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Jane Smith</h3>
                    <p className="text-xs text-gray-500">Posted by u/janesmith • 5 hours ago</p>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-3">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Excited to share my latest project!
                </h2>
                <p className="text-gray-700 text-sm mb-3">
                  Check out the new features I've added to my latest project. Would love to hear your thoughts and suggestions!
                </p>
                {/* Post Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">#project</span>
                  <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">#showcase</span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center space-x-1">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <span className="text-xl">⬆️</span>
                    </button>
                    <span className="text-sm font-medium">856</span>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <span className="text-xl">⬇️</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-1 hover:bg-gray-200 rounded px-2 py-1">
                    <span className="text-xl">💬</span>
                    <span className="text-sm">128 Comments</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:bg-gray-200 rounded px-2 py-1">
                    <span className="text-xl">🔄</span>
                    <span className="text-sm">Share</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:bg-gray-200 rounded px-2 py-1">
                    <span className="text-xl">🔖</span>
                    <span className="text-sm">Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-orange-600 transition-colors">
          +
        </button>
      </div>
    </div>
  )
} 