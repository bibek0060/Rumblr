'use client'

import { useEffect, useState } from 'react'
import { Bell } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Notification {
  id: string
  type: 'like' | 'comment' | 'follow' | 'mention'
  message: string
  createdAt: string
  read: boolean
  senderId: string
  senderName: string
  senderAvatar?: string
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchNotifications = async () => {
      try {
        // Simulated data - replace with real API call
        const mockNotifications: Notification[] = [
          {
            id: '1',
            type: 'like',
            message: 'John liked your post',
            createdAt: new Date().toISOString(),
            read: false,
            senderId: '123',
            senderName: 'John Doe',
          },
          {
            id: '2',
            type: 'comment',
            message: 'Jane commented on your post',
            createdAt: new Date().toISOString(),
            read: false,
            senderId: '456',
            senderName: 'Jane Smith',
          },
        ]
        setNotifications(mockNotifications)
      } catch (error) {
        console.error('Failed to fetch notifications:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center space-x-2 mb-6">
        <Bell className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>

      {notifications.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center text-gray-500">
            No notifications yet
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={!notification.read ? 'border-l-4 border-blue-600' : ''}>
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(notification.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  {!notification.read && (
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 