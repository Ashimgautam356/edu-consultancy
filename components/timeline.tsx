import { Card, CardContent } from "@/components/ui/card"
import { CalendarCheck, FileSearch, GraduationCap, Stamp, Plane } from "lucide-react"

export function Timeline() {
  const steps = [
    {
      title: "Free Consultation",
      description: "Meet with our expert counselors to discuss your academic goals and preferences",
      icon: CalendarCheck,
    },
    {
      title: "University Selection",
      description: "We help you choose the right universities based on your profile and aspirations",
      icon: FileSearch,
    },
    {
      title: "Application Process",
      description: "Our team assists with preparing and submitting applications to selected universities",
      icon: GraduationCap,
    },
    {
      title: "Visa Processing",
      description: "Comprehensive guidance for visa application with our 95% success rate",
      icon: Stamp,
    },
    {
      title: "Pre-Departure Support",
      description: "Preparation for your journey including accommodation, travel, and orientation",
      icon: Plane,
    },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

      <div className="space-y-12 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
          >
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <Card className={`w-full max-w-md shadow-md ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <step.icon className="h-5 w-5 text-primary mr-2" />
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </div>

            <div className="relative z-10 flex items-center justify-center bg-primary text-white rounded-full w-10 h-10 shadow-md">
              {index + 1}
            </div>

            <div className="md:w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

