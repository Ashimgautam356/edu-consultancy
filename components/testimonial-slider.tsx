"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    university: "University of Melbourne, Australia",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "EduConsult made my dream of studying in Australia come true. Their guidance throughout the application and visa process was invaluable. I'm now pursuing my Master's degree at the University of Melbourne!",
  },
  {
    id: 2,
    name: "Michael Chen",
    university: "Stanford University, USA",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "I couldn't have navigated the complex US university application process without EduConsult. Their personalized approach and attention to detail helped me secure a scholarship at Stanford.",
  },
  {
    id: 3,
    name: "Emma Williams",
    university: "University of Oxford, UK",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The team at EduConsult provided exceptional support from university selection to visa approval. Their expertise in UK education system was crucial for my successful application to Oxford.",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative">
      <Card className="border-none shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{currentTestimonial.name}</h3>
              <p className="text-gray-600 text-center">{currentTestimonial.university}</p>
            </div>

            <div className="md:w-2/3 relative">
              <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
              <p className="text-gray-700 italic text-lg leading-relaxed pl-6">{currentTestimonial.quote}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full ${slideIndex === currentIndex ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

