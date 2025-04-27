import { notFound } from 'next/navigation'
import DirectMessage from '@/components/DirectMessage'
import prisma from '@/lib/prisma'

interface MessagePageProps {
  params: {
    userId: string
  }
}

export default async function MessagePage({ params }: MessagePageProps) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.userId,
    },
    select: {
      id: true,
      name: true,
      image: true,
    },
  })

  if (!user) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <DirectMessage
          recipientId={user.id}
          recipientName={user.name || 'Unknown User'}
        />
      </div>
    </div>
  )
} 