import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { message: 'You must be logged in to view messages' },
        { status: 401 }
      )
    }

    // Check if users follow each other
    const followRelationship = await prisma.follow.findFirst({
      where: {
        OR: [
          {
            followerId: session.user.id,
            followingId: params.userId,
          },
          {
            followerId: params.userId,
            followingId: session.user.id,
          },
        ],
      },
    })

    if (!followRelationship) {
      return NextResponse.json(
        { message: 'You can only view messages with users who follow you and whom you follow' },
        { status: 403 }
      )
    }

    const messages = await prisma.directMessage.findMany({
      where: {
        OR: [
          {
            senderId: session.user.id,
            receiverId: params.userId,
          },
          {
            senderId: params.userId,
            receiverId: session.user.id,
          },
        ],
      },
      include: {
        sender: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
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