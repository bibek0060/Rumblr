'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ProfileEditForm from '@/components/ProfileEditForm'

interface UserProfile {
  id: string
  name: string | null
  username: string
  email: string
  image: string | null
  bio: string | null
  createdAt: string
  posts: {
    id: string
    title: string
    content: string
    createdAt: string
  }[]
}

export default function ProfilePage() {
  const params = useParams()
  const { data: session } = useSession()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)

  const isOwnProfile = session?.user?.id === params.id

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/users/${params.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch profile')
        }
        const data = await response.json()
        setProfile(data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Profile not found</h1>
            <p className="mt-2 text-gray-600">The profile you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {profile.name?.[0] || profile.username[0]}
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{profile.name}</h1>
                  <p className="text-gray-600">@{profile.username}</p>
                </div>
              </div>

              {isOwnProfile && !isEditing && (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="w-full"
                >
                  Edit Profile
                </Button>
              )}

              {isEditing ? (
                <ProfileEditForm
                  user={profile}
                  onCancel={() => setIsEditing(false)}
                />
              ) : (
                <>
                  {profile.bio && (
                    <div className="mt-6">
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
                      <p className="text-gray-600">{profile.bio}</p>
                    </div>
                  )}

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <span className="text-xl mr-2">📅</span>
                      <span>Joined {new Date(profile.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Posts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h2>
              {profile.posts.length > 0 ? (
                <div className="space-y-6">
                  {profile.posts.map((post) => (
                    <div key={post.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-700">{post.content}</p>
                      <p className="mt-2 text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No posts yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 