export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-3xl">
              U
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">User Name</h1>
              <p className="text-gray-500">@username</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="text-center">
                  <p className="font-bold text-gray-900">1.2k</p>
                  <p className="text-sm text-gray-500">Posts</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900">5.6k</p>
                  <p className="text-sm text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900">890</p>
                  <p className="text-sm text-gray-500">Following</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - About */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">
                Software developer passionate about building great products. Love coding, reading, and hiking.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <span className="text-xl mr-2">📍</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-xl mr-2">🔗</span>
                  <a href="#" className="text-orange-500 hover:text-orange-600">
                    website.com
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-xl mr-2">📅</span>
                  <span>Joined January 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Posts */}
          <div className="col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Post 1 */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      U
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">User Name</h3>
                      <p className="text-sm text-gray-500">Posted 2 hours ago</p>
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Just finished building my first Next.js application!
                </h2>
                <p className="text-gray-600 mb-4">
                  The developer experience is amazing. The hot reloading and TypeScript support make development so much smoother.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#nextjs</span>
                  <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#webdev</span>
                </div>
              </div>

              {/* Post 2 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      U
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">User Name</h3>
                      <p className="text-sm text-gray-500">Posted 5 hours ago</p>
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Excited to share my latest project!
                </h2>
                <p className="text-gray-600 mb-4">
                  Check out the new features I've added to my latest project. Would love to hear your thoughts and suggestions!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#project</span>
                  <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#showcase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 