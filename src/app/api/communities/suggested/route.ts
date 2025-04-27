import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { message: 'You must be logged in to view suggested communities' },
        { status: 401 }
      )
    }

    // Get user's interests based on their posts and interactions
    const userInterests = await prisma.post.findMany({
      where: {
        authorId: session.user.id,
      },
      select: {
        tags: {
          select: {
            name: true,
          },
        },
      },
    })

    // Extract unique tags from user's posts
    const userTags = new Set(
      userInterests.flatMap((post) => post.tags.map((tag) => tag.name))
    )

    // Find communities that match user's interests
    const suggestedCommunities = await prisma.community.findMany({
      where: {
        AND: [
          {
            members: {
              none: {
                id: session.user.id,
              },
            },
          },
          {
            OR: [
              {
                posts: {
                  some: {
                    tags: {
                      some: {
                        name: {
                          in: Array.from(userTags),
                        },
                      },
                    },
                  },
                },
              },
              {
                name: {
                  contains: Array.from(userTags).join(' '),
                  mode: 'insensitive',
                },
              },
            ],
          },
        ],
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
      take: 5, // Limit to 5 suggestions
    })

    const formattedCommunities = suggestedCommunities.map((community) => ({
      id: community.id,
      name: community.name,
      description: community.description,
      memberCount: community._count.members,
      isJoined: false,
    }))

    return NextResponse.json(formattedCommunities)
  } catch (error) {
    console.error('Error fetching suggested communities:', error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
} 