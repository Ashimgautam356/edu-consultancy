import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface WebinarCardProps {
  title: string
  date: string
  time: string
  host: string
  country: string
  isPremium?: boolean
}

export function WebinarCard({ title, date, time, host, country, isPremium = false }: WebinarCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-40 w-full">
        <Image src="/placeholder.svg?height=300&width=500" alt={title} fill className="object-cover" />
        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
          {country}
        </div>
        {isPremium && (
          <div className="absolute top-3 left-3 bg-gray-900/80 text-white text-xs font-medium px-2 py-1 rounded flex items-center">
            <Lock className="h-3 w-3 mr-1" />
            Premium
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold mb-3 line-clamp-2">{title}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {time}
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            {host}
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-5 py-4 border-t">
        {isPremium ? (
          <Button className="w-full" asChild>
            <Link href="/auth/signup">
              <Lock className="h-4 w-4 mr-2" />
              Unlock Premium
            </Link>
          </Button>
        ) : (
          <Button className="w-full">Register Now</Button>
        )}
      </CardFooter>
    </Card>
  )
}

