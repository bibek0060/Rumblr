import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET(
  req: Request,
  { params }: { params: { communityId: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { message: 'You must be logged in to view messages' },
        { status: 401 }
      )
    }

    const messages = await prisma.chatMessage.findMany({
      where: {
        communityId: params.communityId,
      },
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
      take: 50, // Limit to last 50 messages
    })

    return NextResponse.json(messages)
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}

export async function POST(
  req: Request,
  { params }: { params: { communityId: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { message: 'You must be logged in to send messages' },
        { status: 401 }
      )
    }

    const { content } = await req.json()

    if (!content) {
      return NextResponse.json(
        { message: 'Message content is required' },
        { status: 400 }
      )
    }

    // Check if user is a member of the community
    const isMember = await prisma.community.findFirst({
      where: {
        id: params.communityId,
        members: {
          some: {
            id: session.user.id,
          },
        },
      },
    })

    if (!isMember) {
      return NextResponse.json(
        { message: 'You must be a member of this community to send messages' },
        { status: 403 }
      )
    }

    const message = await prisma.chatMessage.create({
      data: {
        content,
        authorId: session.user.id,
        communityId: params.communityId,
      },
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    })

    return NextResponse.json(message)
  } catch (error) {
    console.error('Error creating message:', error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
} 