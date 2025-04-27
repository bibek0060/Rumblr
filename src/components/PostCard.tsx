import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, MessageSquare, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface PostCardProps {
  id: string
  title: string
  content: string
  author: {
    name: string
    image: string | null
  }
  community?: {
    name: string
    image: string | null
  }
  votes: number
  comments: number
  createdAt: string
}

export function PostCard({
  id,
  title,
  content,
  author,
  community,
  votes,
  comments,
  createdAt,
}: PostCardProps) {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex">
          {/* Vote buttons */}
          <div className="flex flex-col items-center bg-gray-50 p-2 rounded-l-lg">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 hover:bg-gray-100 text-gray-500 hover:text-blue-500"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium text-gray-700">{votes}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 hover:bg-gray-100 text-gray-500 hover:text-red-500"
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Post content */}
          <div className="flex-1 p-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
              {community && (
                <>
                  <Link 
                    href={`/r/${community.name}`} 
                    className="font-medium hover:text-blue-500 transition-colors"
                  >
                    r/{community.name}
                  </Link>
                  <span className="text-gray-300">•</span>
                </>
              )}
              <span>Posted by u/{author.name}</span>
              <span className="text-gray-300">•</span>
              <span>{new Date(createdAt).toLocaleDateString()}</span>
            </div>

            <Link href={`/post/${id}`}>
              <h3 className="text-lg font-semibold mb-2 hover:text-blue-500 transition-colors">{title}</h3>
            </Link>

            <p className="text-gray-700 mb-4 line-clamp-3">{content}</p>

            <CardFooter className="p-0">
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center space-x-1.5 text-gray-500 hover:text-blue-500 hover:bg-blue-50"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{comments} Comments</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center space-x-1.5 text-gray-500 hover:text-blue-500 hover:bg-blue-50"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </CardFooter>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 