import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { message: 'You must be logged in to view joined communities' },
        { status: 401 }
      )
    }

    const communities = await prisma.community.findMany({
      where: {
        members: {
          some: {
            id: session.user.id,
          },
        },
      },
      select: {
        id: true,
        name: true,
        description: true,
        _count: {
          select: {
            members: true,
          },
        },
      },
    })

    const formattedCommunities = communities.map((community) => ({
      id: community.id,
      name: community.name,
      description: community.description,
      memberCount: community._count.members,
      isJoined: true,
    }))

    return NextResponse.json(formattedCommunities)
  } catch (error) {
    console.error('Error fetching joined communities:', error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
} 