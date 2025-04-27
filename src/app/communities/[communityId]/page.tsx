import { notFound } from 'next/navigation'
import CommunityChat from '@/components/CommunityChat'
import prisma from '@/lib/prisma'

interface CommunityPageProps {
  params: {
    communityId: string
  }
}

export default async function CommunityPage({ params }: CommunityPageProps) {
  const community = await prisma.community.findUnique({
    where: {
      id: params.communityId,
    },
    include: {
      members: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
      moderators: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  })

  if (!community) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Community Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{community.name}</h1>
          {community.description && (
            <p className="text-gray-600 mb-4">{community.description}</p>
          )}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="font-bold text-gray-900">{community.members.length}</p>
              <p className="text-sm text-gray-500">Members</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-900">{community.moderators.length}</p>
              <p className="text-sm text-gray-500">Moderators</p>
            </div>
          </div>
        </div>

        {/* Community Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Posts will go here */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h2>
              <p className="text-gray-600">No posts yet</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Community Chat */}
            <CommunityChat
              communityId={community.id}
              communityName={community.name}
            />

            {/* Members List */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Members</h2>
              <div className="space-y-4">
                {community.members.map((member) => (
                  <div key={member.id} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {member.name?.[0] || '?'}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-500">Member</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Moderators List */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Moderators</h2>
              <div className="space-y-4">
                {community.moderators.map((moderator) => (
                  <div key={moderator.id} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {moderator.name?.[0] || '?'}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{moderator.name}</p>
                      <p className="text-sm text-gray-500">Moderator</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 