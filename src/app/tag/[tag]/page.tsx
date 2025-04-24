import { notFound } from 'next/navigation'

interface TagPageProps {
  params: {
    tag: string
  }
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params

  // TODO: Fetch posts with this tag from the database
  // For now, we'll show a placeholder
  const posts = [
    {
      id: '1',
      title: 'Sample Post with #' + tag,
      content: 'This is a sample post that contains the #' + tag + ' hashtag.',
      author: {
        name: 'John Doe',
        username: 'johndoe',
        image: null
      },
      createdAt: new Date().toISOString(),
      tags: [tag]
    }
  ]

  if (!posts.length) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        {/* Tag Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">#{tag}</h1>
          <p className="text-gray-600">Posts tagged with #{tag}</p>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {post.author.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{post.author.name}</h3>
                      <p className="text-sm text-gray-500">Posted by u/{post.author.username}</p>
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <a
                      key={tag}
                      href={`/tag/${tag}`}
                      className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full hover:bg-orange-200 transition-colors"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 