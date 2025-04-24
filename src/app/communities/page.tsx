export default function Communities() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Communities</h1>
          <p className="text-gray-500 mt-2">Discover and join communities that interest you</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search communities..."
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition-colors">
              Create Community
            </button>
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Community Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  T
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Technology</h3>
                  <p className="text-sm text-gray-500">1.2k members</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Discuss the latest in technology, programming, and digital innovation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#tech</span>
                <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#programming</span>
                <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">#innovation</span>
              </div>
              <button className="w-full mt-4 bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition-colors">
                Join Community
              </button>
            </div>
          </div>

          {/* Community Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  G
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Gaming</h3>
                  <p className="text-sm text-gray-500">2.5k members</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Share gaming experiences, tips, and connect with fellow gamers.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">#gaming</span>
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">#esports</span>
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">#streaming</span>
              </div>
              <button className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors">
                Join Community
              </button>
            </div>
          </div>

          {/* Community Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-green-500 to-green-600"></div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Music</h3>
                  <p className="text-sm text-gray-500">3.1k members</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Discuss music, share playlists, and connect with music enthusiasts.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">#music</span>
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">#concerts</span>
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">#playlists</span>
              </div>
              <button className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors">
                Join Community
              </button>
            </div>
          </div>

          {/* Community Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-purple-500 to-purple-600"></div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Art</h3>
                  <p className="text-sm text-gray-500">1.8k members</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Share artwork, discuss techniques, and connect with artists.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">#art</span>
                <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">#design</span>
                <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">#creativity</span>
              </div>
              <button className="w-full mt-4 bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600 transition-colors">
                Join Community
              </button>
            </div>
          </div>

          {/* Community Card 5 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sports</h3>
                  <p className="text-sm text-gray-500">2.9k members</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Discuss sports, share updates, and connect with sports fans.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full">#sports</span>
                <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full">#fitness</span>
                <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full">#competition</span>
              </div>
              <button className="w-full mt-4 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-colors">
                Join Community
              </button>
            </div>
          </div>

          {/* Community Card 6 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  F
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Food</h3>
                  <p className="text-sm text-gray-500">1.5k members</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Share recipes, cooking tips, and connect with food enthusiasts.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">#food</span>
                <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">#cooking</span>
                <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">#recipes</span>
              </div>
              <button className="w-full mt-4 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 