import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  try {
    // Create a test user
    const user = await prisma.user.upsert({
      where: { email: 'test@example.com' },
      update: {},
      create: {
        email: 'test@example.com',
        name: 'Test User',
        password: await hash('password123', 10),
        username: 'testuser',
      },
    })

    // Create a test community
    const community = await prisma.community.upsert({
      where: { name: 'testcommunity' },
      update: {},
      create: {
        name: 'testcommunity',
        description: 'A test community for development',
        members: {
          connect: { id: user.id }
        }
      },
    })

    // Create some test posts
    const posts = await Promise.all([
      prisma.post.create({
        data: {
          title: 'Welcome to Rumblr!',
          content: 'This is a test post to get started with Rumblr.',
          type: 'text',
          authorId: user.id,
          communityId: community.id,
        },
      }),
      prisma.post.create({
        data: {
          title: 'Getting Started Guide',
          content: 'Here are some tips for using Rumblr effectively.',
          type: 'text',
          authorId: user.id,
          communityId: community.id,
        },
      }),
    ])

    console.log('Database has been seeded. 🌱')
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 