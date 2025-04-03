import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Users, Video, FileText, CreditCard, MapPin } from "lucide-react"

export function PremiumFeatures() {
  const features = [
    {
      title: "One-on-One Expert Counseling",
      description: "Get personalized guidance from our experienced education consultants",
      icon: MessageSquare,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Community Networking",
      description: "Connect with other students heading to the same country or university",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Live Sessions & Webinars",
      description: "Exclusive access to all live and recorded sessions with education experts",
      icon: Video,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Document Process Tracking",
      description: "Real-time updates on your application and visa processing status",
      icon: FileText,
      color: "bg-green-100 text-green-600",
    },
  ]

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className={`rounded-full ${feature.color} p-3 w-12 h-12 mb-4 flex items-center justify-center`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors">
            <div className="flex items-start mb-4">
              <div className="rounded-full bg-primary/10 p-3 mr-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Pay Online</h4>
                <p className="text-gray-600 text-sm">Secure payment for instant access to premium features</p>
                <Badge className="mt-2">Instant Access</Badge>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 ml-12">
              <li>• Credit/Debit Cards</li>
              <li>• PayPal</li>
              <li>• Bank Transfer</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors">
            <div className="flex items-start mb-4">
              <div className="rounded-full bg-primary/10 p-3 mr-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Visit Our Office</h4>
                <p className="text-gray-600 text-sm">Make payment in person at any of our branch offices</p>
                <Badge variant="outline" className="mt-2">
                  24-48 Hour Activation
                </Badge>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 ml-12">
              <li>• Cash Payment</li>
              <li>• Check/Demand Draft</li>
              <li>• POS Terminal Available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

