import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Fetch user profile
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('id, name, email, image, bio, created_at')
      .eq('id', params.id)
      .single()

    if (userError) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      )
    }

    // Fetch user's recent posts
    const { data: posts, error: postsError } = await supabase
      .from('posts')
      .select('id, content, created_at')
      .eq('user_id', params.id)
      .order('created_at', { ascending: false })
      .limit(10)

    if (postsError) {
      return NextResponse.json(
        { message: 'Failed to fetch posts' },
        { status: 500 }
      )
    }

    // Format the response
    const profile = {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      bio: user.bio,
      createdAt: user.created_at,
      posts: posts.map(post => ({
        id: post.id,
        content: post.content,
        createdAt: post.created_at
      }))
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
} 