import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/lib/prisma'
import { authOptions } from '@/lib/auth'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated and is updating their own profile
    if (!session?.user?.id || session.user.id !== params.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { name, bio, username } = await request.json()

    // If username is being updated, check if it's available
    if (username) {
      const existingUser = await prisma.user.findUnique({
        where: {
          username: username.toLowerCase(),
          NOT: {
            id: params.id
          }
        },
      })

      if (existingUser) {
        return NextResponse.json(
          { error: 'Username is already taken' },
          { status: 400 }
        )
      }
    }

    // Update user profile
    const updatedUser = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        name: name,
        bio: bio,
        username: username ? username.toLowerCase() : undefined,
      },
      select: {
        id: true,
        name: true,
        username: true,
        bio: true,
        image: true,
        email: true,
      },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error('Error updating profile:', error)
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    )
  }
} 