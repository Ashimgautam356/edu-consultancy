import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Video, Play, Download } from "lucide-react"

export function UpcomingWebinars() {
  const upcomingWebinars = [
    {
      id: 1,
      title: "Studying in Australia: Requirements & Opportunities",
      date: "March 20, 2025",
      time: "3:00 PM - 4:30 PM",
      host: {
        name: "Sarah Johnson",
        role: "Education Counselor",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      country: "Australia",
    },
    {
      id: 2,
      title: "Scholarship Opportunities in the USA",
      date: "March 25, 2025",
      time: "5:00 PM - 6:30 PM",
      host: {
        name: "Michael Brown",
        role: "Scholarship Specialist",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      country: "USA",
    },
  ]

  const recordedWebinars = [
    {
      id: 1,
      title: "UK Student Visa Process Explained",
      date: "February 15, 2025",
      duration: "1 hour 15 minutes",
      host: {
        name: "Emma Wilson",
        role: "Visa Counselor",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      country: "UK",
      views: 245,
    },
    {
      id: 2,
      title: "How to Write a Winning Statement of Purpose",
      date: "February 5, 2025",
      duration: "55 minutes",
      host: {
        name: "David Lee",
        role: "Application Specialist",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      views: 312,
    },
  ]

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle>Webinars & Sessions</CardTitle>
        <CardDescription>Access live and recorded educational sessions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upcoming">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="recorded">
              <Play className="h-4 w-4 mr-2" />
              Recorded
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="space-y-4">
              {upcomingWebinars.map((webinar) => (
                <div key={webinar.id} className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={webinar.host.avatar} alt={webinar.host.name} />
                      <AvatarFallback>{webinar.host.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{webinar.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{webinar.date}</span>
                        <Clock className="h-4 w-4 ml-3 mr-1" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">Host: {webinar.host.name}</span>
                        {webinar.country && <Badge className="ml-2 text-xs">{webinar.country}</Badge>}
                      </div>
                    </div>
                  </div>
                  <Button size="sm">
                    <Video className="h-4 w-4 mr-2" />
                    Register
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recorded">
            <div className="space-y-4">
              {recordedWebinars.map((webinar) => (
                <div key={webinar.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Play className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{webinar.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{webinar.date}</span>
                        <Clock className="h-4 w-4 ml-3 mr-1" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">Host: {webinar.host.name}</span>
                        {webinar.country && <Badge className="ml-2 text-xs">{webinar.country}</Badge>}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

