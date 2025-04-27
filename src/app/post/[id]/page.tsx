'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

type Post = {
  id: string
  title: string
  content: string
  createdAt: string
  author: {
    name: string | null
    image: string | null
  }
  community: {
    name: string
  }
  _count: {
    comments: number
    votes: number
  }
  comments: {
    id: string
    content: string
    createdAt: string
    author: {
      name: string | null
      image: string | null
    }
  }[]
}

export default function PostPage() {
  const { id } = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`)
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error('Error fetching post:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) {
    return <div className="max-w-2xl mx-auto py-8 px-4">Loading...</div>
  }

  if (!post) {
    return <div className="max-w-2xl mx-auto py-8 px-4">Post not found</div>
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          {post.author.image ? (
            <Image
              src={post.author.image}
              alt={post.author.name || 'User'}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200" />
          )}
          <div>
            <Link href={`/profile/${post.author.name}`} className="font-medium hover:underline">
              {post.author.name || 'Anonymous'}
            </Link>
            <div className="text-sm text-gray-500">
              Posted in{' '}
              <Link href={`/communities/${post.community.name}`} className="text-blue-500 hover:underline">
                {post.community.name}
              </Link>
              {' '}• {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-6">{post.content}</p>

        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>{post._count.comments} comments</span>
          <span>{post._count.votes} votes</span>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        {post.comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-3 mb-2">
              {comment.author.image ? (
                <Image
                  src={comment.author.image}
                  alt={comment.author.name || 'User'}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-200" />
              )}
              <div>
                <Link href={`/profile/${comment.author.name}`} className="font-medium hover:underline">
                  {comment.author.name || 'Anonymous'}
                </Link>
                <div className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                </div>
              </div>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 