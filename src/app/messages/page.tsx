import MessagesList from '@/components/MessagesList'

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-2">
            Chat with users who follow you and whom you follow.
          </p>
        </div>

        <MessagesList />
      </div>
    </div>
  )
} 