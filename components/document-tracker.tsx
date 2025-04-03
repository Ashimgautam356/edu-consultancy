import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, CheckCircle, Clock, AlertCircle, Download } from "lucide-react"

export function DocumentTracker() {
  const documents = [
    {
      name: "Passport",
      status: "verified",
      date: "Feb 15, 2025",
      icon: FileText,
    },
    {
      name: "Academic Transcripts",
      status: "verified",
      date: "Feb 18, 2025",
      icon: FileText,
    },
    {
      name: "Statement of Purpose",
      status: "pending",
      date: "Feb 20, 2025",
      icon: FileText,
    },
    {
      name: "Recommendation Letters",
      status: "action_required",
      date: "Feb 22, 2025",
      icon: FileText,
      message: "Need one more letter from academic advisor",
    },
    {
      name: "English Proficiency Test",
      status: "not_started",
      date: "",
      icon: FileText,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Under Review</Badge>
      case "action_required":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Action Required</Badge>
      case "not_started":
        return <Badge variant="outline">Not Started</Badge>
      default:
        return null
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "action_required":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "not_started":
        return <Upload className="h-5 w-5 text-gray-400" />
      default:
        return null
    }
  }

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle>Document Tracker</CardTitle>
        <CardDescription>Track the status of your application documents</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg ${
                doc.status === "action_required"
                  ? "bg-red-50"
                  : doc.status === "verified"
                    ? "bg-green-50"
                    : "bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`p-2 rounded-full ${
                    doc.status === "verified"
                      ? "bg-green-100"
                      : doc.status === "pending"
                        ? "bg-yellow-100"
                        : doc.status === "action_required"
                          ? "bg-red-100"
                          : "bg-gray-100"
                  }`}
                >
                  <doc.icon className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-medium">{doc.name}</h4>
                  {doc.date && <p className="text-sm text-gray-500">Updated: {doc.date}</p>}
                  {doc.message && <p className="text-sm text-red-600 mt-1">{doc.message}</p>}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {getStatusBadge(doc.status)}
                {doc.status === "verified" ? (
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    View
                  </Button>
                ) : doc.status === "not_started" ? (
                  <Button size="sm">
                    <Upload className="h-4 w-4 mr-1" />
                    Upload
                  </Button>
                ) : doc.status === "action_required" ? (
                  <Button size="sm">
                    <Upload className="h-4 w-4 mr-1" />
                    Update
                  </Button>
                ) : (
                  <div className="w-5 h-5 flex items-center justify-center">{getStatusIcon(doc.status)}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

