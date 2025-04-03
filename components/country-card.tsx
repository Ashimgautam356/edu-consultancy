import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CountryCardProps {
  country: string
}

export function CountryCard({ country }: CountryCardProps) {
  // Map of country flags (in a real app, you'd use actual flag images)
  const countryImages: Record<string, string> = {
    Australia: "/placeholder.svg?height=300&width=500",
    USA: "/placeholder.svg?height=300&width=500",
    UK: "/placeholder.svg?height=300&width=500",
    Germany: "/placeholder.svg?height=300&width=500",
    Canada: "/placeholder.svg?height=300&width=500",
    Denmark: "/placeholder.svg?height=300&width=500",
  }

  // Map of country details
  const countryDetails: Record<string, { programs: string[]; cost: string; duration: string }> = {
    Australia: {
      programs: ["Business", "Engineering", "Medicine", "Arts"],
      cost: "$20,000 - $45,000 per year",
      duration: "2-4 years",
    },
    USA: {
      programs: ["Computer Science", "Business", "Engineering", "Liberal Arts"],
      cost: "$25,000 - $60,000 per year",
      duration: "4 years",
    },
    UK: {
      programs: ["Business", "Law", "Engineering", "Arts"],
      cost: "£10,000 - £38,000 per year",
      duration: "3-4 years",
    },
    Germany: {
      programs: ["Engineering", "Science", "Business", "Arts"],
      cost: "€0 - €20,000 per year",
      duration: "3-4 years",
    },
    Canada: {
      programs: ["Business", "Engineering", "Computer Science", "Healthcare"],
      cost: "CAD 15,000 - CAD 35,000 per year",
      duration: "4 years",
    },
    Denmark: {
      programs: ["Business", "Engineering", "Design", "Science"],
      cost: "€0 - €15,000 per year",
      duration: "3-4 years",
    },
  }

  const details = countryDetails[country]

  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={countryImages[country] || "/placeholder.svg"}
          alt={`${country} universities`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-2xl font-bold">{country}</h3>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Popular Programs</h4>
            <div className="flex flex-wrap gap-2">
              {details.programs.map((program) => (
                <Badge key={program} variant="outline">
                  {program}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Average Cost</h4>
              <p className="text-sm">{details.cost}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Duration</h4>
              <p className="text-sm">{details.duration}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

