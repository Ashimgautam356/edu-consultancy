import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { FileText, MessageSquare, Users, Video, Calendar, Bell, Settings, Clock } from "lucide-react"
import { DocumentTracker } from "@/components/document-tracker"
import { CommunitySection } from "@/components/community-section"
import { UpcomingWebinars } from "@/components/upcoming-webinars"
import { DashboardNavbar } from "@/components/dashboard-navbar"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-whitesmoke">
      <DashboardNavbar />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Sarah! Track your study abroad journey.</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Premium Member
            </Badge>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Application Status */}
        <Card className="mb-8 border-none shadow-md">
          <CardHeader className="pb-3">
            <CardTitle>Application Status</CardTitle>
            <CardDescription>Track your university application progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <span className="font-medium">University of Melbourne</span>
                    <Badge className="ml-2">Australia</Badge>
                  </div>
                  <span className="text-sm text-primary font-medium">75% Complete</span>
                </div>
                <Progress value={75} className="h-2" />
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>Application Submitted</span>
                  <span>Documents Verified</span>
                  <span className="text-gray-300">Offer Letter</span>
                  <span className="text-gray-300">Visa</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <span className="font-medium">Stanford University</span>
                    <Badge className="ml-2">USA</Badge>
                  </div>
                  <span className="text-sm text-primary font-medium">50% Complete</span>
                </div>
                <Progress value={50} className="h-2" />
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>Application Submitted</span>
                  <span>Documents Verified</span>
                  <span className="text-gray-300">Offer Letter</span>
                  <span className="text-gray-300">Visa</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="documents">
              <FileText className="h-4 w-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="community">
              <Users className="h-4 w-4 mr-2" />
              Community
            </TabsTrigger>
            <TabsTrigger value="webinars">
              <Video className="h-4 w-4 mr-2" />
              Webinars
            </TabsTrigger>
            <TabsTrigger value="counseling">
              <MessageSquare className="h-4 w-4 mr-2" />
              Counseling
            </TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            <DocumentTracker />
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <CommunitySection />
          </TabsContent>

          <TabsContent value="webinars" className="space-y-6">
            <UpcomingWebinars />
          </TabsContent>

          <TabsContent value="counseling" className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Upcoming Counseling Sessions</CardTitle>
                <CardDescription>Your scheduled one-on-one sessions with our experts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Counselor" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Dr. John Davis</h4>
                        <p className="text-sm text-gray-500">University Selection Specialist</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>March 18, 2025</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>10:00 AM - 11:00 AM</span>
                      </div>
                    </div>
                    <Button size="sm">Join Call</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Counselor" />
                        <AvatarFallback>MS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Maria Smith</h4>
                        <p className="text-sm text-gray-500">Visa Counselor</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>March 25, 2025</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>2:00 PM - 3:00 PM</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    Book New Counseling Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

