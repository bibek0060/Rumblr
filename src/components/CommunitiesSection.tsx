'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

interface Community {
  id: string
  name: string
  description: string | null
  memberCount: number
  isJoined: boolean
}

export default function CommunitiesSection() {
  const [joinedCommunities, setJoinedCommunities] = useState<Community[]>([])
  const [suggestedCommunities, setSuggestedCommunities] = useState<Community[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { data: session } = useSession()

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        // Fetch joined communities
        const joinedResponse = await fetch('/api/communities/joined')
        const joinedData = await joinedResponse.json()
        setJoinedCommunities(joinedData)

        // Fetch suggested communities
        const suggestedResponse = await fetch('/api/communities/suggested')
        const suggestedData = await suggestedResponse.json()
        setSuggestedCommunities(suggestedData)
      } catch (error) {
        console.error('Error fetching communities:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (session?.user) {
      fetchCommunities()
    }
  }, [session])

  const handleJoinCommunity = async (communityId: string) => {
    try {
      const response = await fetch(`/api/communities/${communityId}/join`, {
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Failed to join community')
      }

      // Update the communities lists
      setJoinedCommunities((prev) => [
        ...prev,
        suggestedCommunities.find((c) => c.id === communityId)!,
      ])
      setSuggestedCommunities((prev) =>
        prev.filter((c) => c.id !== communityId)
      )
    } catch (error) {
      console.error('Error joining community:', error)
    }
  }

  if (!session?.user) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <p className="text-gray-600 text-center">Please sign in to view communities</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <p className="text-gray-600 text-center">Loading communities...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Joined Communities */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Communities</h2>
        {joinedCommunities.length === 0 ? (
          <p className="text-gray-600">You haven't joined any communities yet</p>
        ) : (
          <div className="space-y-4">
            {joinedCommunities.map((community) => (
              <div
                key={community.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-500 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {community.name[0]}
                  </div>
                  <div>
                    <Link
                      href={`/communities/${community.id}`}
                      className="font-medium text-gray-900 hover:text-orange-500"
                    >
                      {community.name}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {community.memberCount} members
                    </p>
                  </div>
                </div>
                <Link
                  href={`/communities/${community.id}`}
                  className="text-orange-500 hover:text-orange-600"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Suggested Communities */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Suggested Communities</h2>
        {suggestedCommunities.length === 0 ? (
          <p className="text-gray-600">No suggested communities at the moment</p>
        ) : (
          <div className="space-y-4">
            {suggestedCommunities.map((community) => (
              <div
                key={community.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-500 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {community.name[0]}
                  </div>
                  <div>
                    <Link
                      href={`/communities/${community.id}`}
                      className="font-medium text-gray-900 hover:text-orange-500"
                    >
                      {community.name}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {community.memberCount} members
                    </p>
                    {community.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {community.description}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleJoinCommunity(community.id)}
                  className="text-orange-500 hover:text-orange-600"
                >
                  Join
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 