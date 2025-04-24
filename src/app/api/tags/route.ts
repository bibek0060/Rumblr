import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        { message: 'You must be logged in to create a hashtag' },
        { status: 401 }
      )
    }

    const { name } = await req.json()

    if (!name) {
      return NextResponse.json(
        { message: 'Hashtag name is required' },
        { status: 400 }
      )
    }

    // Check if tag already exists
    const existingTag = await prisma.tag.findUnique({
      where: { name },
    })

    if (existingTag) {
      return NextResponse.json(
        { message: 'This hashtag already exists' },
        { status: 400 }
      )
    }

    // Create new tag
    const tag = await prisma.tag.create({
      data: {
        name,
      },
    })

    return NextResponse.json(tag)
  } catch (error) {
    console.error('Error creating tag:', error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
} 