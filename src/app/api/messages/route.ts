import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { message: 'You must be logged in to send messages' },
        { status: 401 }
      )
    }

    const { content, receiverId } = await req.json()

    if (!content || !receiverId) {
      return NextResponse.json(
        { message: 'Message content and receiver ID are required' },
        { status: 400 }
      )
    }

    // Check if users follow each other
    const followRelationship = await prisma.follow.findFirst({
      where: {
        OR: [
          {
            followerId: session.user.id,
            followingId: receiverId,
          },
          {
            followerId: receiverId,
            followingId: session.user.id,
          },
        ],
      },
    })

    if (!followRelationship) {
      return NextResponse.json(
        { message: 'You can only message users who follow you and whom you follow' },
        { status: 403 }
      )
    }

    const message = await prisma.directMessage.create({
      data: {
        content,
        senderId: session.user.id,
        receiverId,
      },
      include: {
        sender: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    })

    return NextResponse.json(message)
  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
} 