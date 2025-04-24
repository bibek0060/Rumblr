export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Rumblr</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Communities */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Featured Communities</h2>
          <p className="text-gray-600">Join our growing communities and start sharing!</p>
        </div>

        {/* Popular Posts */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Popular Posts</h2>
          <p className="text-gray-600">Discover what's trending in our communities.</p>
        </div>

        {/* Get Started */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-600">Create an account to join the conversation!</p>
        </div>
      </div>
    </div>
  )
} 