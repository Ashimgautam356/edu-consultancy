import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Search, Send, ThumbsUp, MessageCircle, Share2 } from "lucide-react"

export function CommunitySection() {
  const communities = [
    {
      name: "Australia Bound 2025",
      members: 245,
      posts: 120,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "USA Study Group",
      members: 189,
      posts: 87,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "University of Melbourne Students",
      members: 156,
      posts: 64,
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const posts = [
    {
      id: 1,
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "USA",
      },
      content:
        "Just got my visa approved for Stanford! So excited to start my journey. Any tips from current students about housing options near campus?",
      likes: 24,
      comments: 8,
      time: "2 hours ago",
    },
    {
      id: 2,
      author: {
        name: "Emma Williams",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "UK",
      },
      content:
        "Has anyone applied for the International Student Scholarship at Oxford? I'm working on my application and would love some advice on the essay portion.",
      likes: 15,
      comments: 12,
      time: "5 hours ago",
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle>Community</CardTitle>
          <CardDescription>Connect with other students heading to the same destinations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="feed">
            <TabsList className="mb-6">
              <TabsTrigger value="feed">
                <MessageSquare className="h-4 w-4 mr-2" />
                Feed
              </TabsTrigger>
              <TabsTrigger value="groups">
                <Users className="h-4 w-4 mr-2" />
                Groups
              </TabsTrigger>
            </TabsList>

            <TabsContent value="feed">
              <div className="mb-6">
                <div className="flex space-x-4 mb-6">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                    <AvatarFallback>YA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input placeholder="Share something with the community..." className="mb-2" />
                    <Button size="sm">
                      <Send className="h-4 w-4 mr-2" />
                      Post
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  {posts.map((post) => (
                    <div key={post.id} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">{post.author.name}</h4>
                            <Badge className="ml-2 text-xs">{post.author.location}</Badge>
                          </div>
                          <p className="text-xs text-gray-500">{post.time}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{post.content}</p>
                      <div className="flex space-x-4 text-gray-500 text-sm">
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="groups">
              <div className="mb-6">
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search communities..." className="pl-10" />
                </div>

                <div className="space-y-4">
                  {communities.map((community, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={community.image} alt={community.name} />
                          <AvatarFallback>{community.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{community.name}</h4>
                          <p className="text-xs text-gray-500">
                            {community.members} members • {community.posts} posts
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Join
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Create New Group
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

