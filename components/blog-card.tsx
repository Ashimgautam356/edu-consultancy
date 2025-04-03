import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
}

export function BlogCard({ title, excerpt, category, date }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image src="/placeholder.svg?height=300&width=500" alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-5">
        <Badge className="mb-3">{category}</Badge>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="px-5 py-3 border-t flex justify-between items-center">
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          {date}
        </div>
        <a href="#" className="text-primary text-sm font-medium hover:underline">
          Read More
        </a>
      </CardFooter>
    </Card>
  )
}

