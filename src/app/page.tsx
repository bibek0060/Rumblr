export default function Feed() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Layout */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-72 min-h-screen bg-white border-r border-gray-200 p-6">
          {/* User Profile */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 mb-8 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                U
              </div>
              <div>
                <h3 className="font-bold text-xl">User Name</h3>
                <p className="text-white/80">@username</p>
              </div>
            </div>
            <div className="flex justify-between mt-6 pt-6 border-t border-white/20">
              <div className="text-center">
                <p className="font-bold text-xl">1.2k</p>
                <p className="text-sm text-white/80">Posts</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-xl">5.6k</p>
                <p className="text-sm text-white/80">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-xl">890</p>
                <p className="text-sm text-white/80">Following</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 text-gray-700 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
              <span className="text-xl">🏠</span>
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
              <span className="text-xl">🔍</span>
              <span>Explore</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
              <span className="text-xl">🔔</span>
              <span>Notifications</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
              <span className="text-xl">✉️</span>
              <span>Messages</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
              <span className="text-xl">🔖</span>
              <span>Bookmarks</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
              <span className="text-xl">👥</span>
              <span>Communities</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-700 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-colors">
              <span className="text-xl">⚙️</span>
              <span>Settings</span>
            </a>
          </nav>

          {/* Create Post Button */}
          <button className="w-full mt-8 bg-orange-500 text-white px-4 py-3 rounded-xl hover:bg-orange-600 transition-colors font-medium">
            Create Post
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            {/* Create Post Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  U
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="What's on your mind?"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px] resize-none text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>
              
              {/* Post Options */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <div className="flex space-x-6">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500 transition-colors">
                    <span className="text-xl">📷</span>
                    <span>Photo</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500 transition-colors">
                    <span className="text-xl">🎥</span>
                    <span>Video</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500 transition-colors">
                    <span className="text-xl">🔗</span>
                    <span>Link</span>
                  </button>
                </div>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition-colors font-medium">
                  Post
                </button>
              </div>
            </div>

            {/* Feed Posts */}
            <div className="space-y-6">
              {/* Sample Post 1 */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Post Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        J
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">John Doe</h3>
                        <p className="text-sm text-gray-500">Posted by u/johndoe • 2 hours ago</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <span className="text-xl">⋮</span>
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Just finished building my first Next.js application!
                  </h2>
                  <p className="text-gray-600 mb-4">
                    The developer experience is amazing. The hot reloading and TypeScript support make development so much smoother.
                  </p>
                  {/* Post Image */}
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/600x400" 
                      alt="Post image" 
                      className="w-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Post Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#nextjs</span>
                    <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#webdev</span>
                    <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#coding</span>
                  </div>
                </div>

                {/* Post Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-orange-100 rounded-full text-gray-500 hover:text-orange-500">
                          <span className="text-xl">⬆️</span>
                        </button>
                        <span className="font-medium text-gray-700">1.2k</span>
                        <button className="p-2 hover:bg-orange-100 rounded-full text-gray-500 hover:text-orange-500">
                          <span className="text-xl">⬇️</span>
                        </button>
                      </div>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500">
                        <span className="text-xl">💬</span>
                        <span>245 Comments</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500">
                        <span className="text-xl">🔄</span>
                        <span>Share</span>
                      </button>
                    </div>
                    <button className="text-gray-500 hover:text-orange-500">
                      <span className="text-xl">🔖</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sample Post 2 */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Post Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        J
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Jane Smith</h3>
                        <p className="text-sm text-gray-500">Posted by u/janesmith • 5 hours ago</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <span className="text-xl">⋮</span>
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Excited to share my latest project!
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Check out the new features I've added to my latest project. Would love to hear your thoughts and suggestions!
                  </p>
                  {/* Post Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#project</span>
                    <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#showcase</span>
                  </div>
                </div>

                {/* Post Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-orange-100 rounded-full text-gray-500 hover:text-orange-500">
                          <span className="text-xl">⬆️</span>
                        </button>
                        <span className="font-medium text-gray-700">856</span>
                        <button className="p-2 hover:bg-orange-100 rounded-full text-gray-500 hover:text-orange-500">
                          <span className="text-xl">⬇️</span>
                        </button>
                      </div>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500">
                        <span className="text-xl">💬</span>
                        <span>128 Comments</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500">
                        <span className="text-xl">🔄</span>
                        <span>Share</span>
                      </button>
                    </div>
                    <button className="text-gray-500 hover:text-orange-500">
                      <span className="text-xl">🔖</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 min-h-screen bg-white border-l border-gray-200 p-6">
          {/* Trending Topics */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Trending Topics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="font-medium text-gray-800">#nextjs</p>
                    <p className="text-sm text-gray-500">1.2k posts</p>
                  </div>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Follow</button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-medium text-gray-800">#webdev</p>
                    <p className="text-sm text-gray-500">856 posts</p>
                  </div>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Follow</button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="font-medium text-gray-800">#coding</p>
                    <p className="text-sm text-gray-500">2.3k posts</p>
                  </div>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Follow</button>
              </div>
            </div>
          </div>

          {/* Suggested Users */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Suggested Users</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Alice Johnson</p>
                    <p className="text-sm text-gray-500">@alicej</p>
                  </div>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Follow</button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    B
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Bob Wilson</p>
                    <p className="text-sm text-gray-500">@bobw</p>
                  </div>
                </div>
                <button className="text-orange-500 hover:text-orange-600">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 