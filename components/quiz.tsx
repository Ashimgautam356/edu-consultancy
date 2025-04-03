"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle } from "lucide-react"

interface Question {
  id: number
  text: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    text: "What field of study are you interested in?",
    options: ["Business & Management", "Engineering & Technology", "Medicine & Health Sciences", "Arts & Humanities"],
  },
  {
    id: 2,
    text: "What is your budget range for tuition fees per year?",
    options: ["Under $10,000", "$10,000 - $25,000", "$25,000 - $40,000", "Above $40,000"],
  },
  {
    id: 3,
    text: "Which climate do you prefer?",
    options: ["Warm/Tropical", "Moderate/Mediterranean", "Cool/Continental", "No Preference"],
  },
]

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleNext = () => {
    if (selectedOption) {
      // Save the answer
      setAnswers({
        ...answers,
        [questions[currentQuestion].id]: selectedOption,
      })

      // Move to next question or show result
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        setShowResult(true)
      }
    }
  }

  // Simple recommendation logic based on answers
  const getRecommendation = () => {
    // This is a simplified recommendation logic
    // In a real app, you would have more sophisticated matching

    const field = answers[1]
    const budget = answers[2]
    const climate = answers[3]

    if (field === "Business & Management" && budget === "Above $40,000") {
      return {
        country: "USA",
        program: "MBA",
        universities: ["Harvard Business School", "Stanford Graduate School of Business"],
      }
    } else if (field === "Engineering & Technology" && budget === "$25,000 - $40,000") {
      return {
        country: "Australia",
        program: "Master of Engineering",
        universities: ["University of Melbourne", "University of Sydney"],
      }
    } else if (field === "Medicine & Health Sciences") {
      return {
        country: "UK",
        program: "Medicine",
        universities: ["University of Oxford", "Imperial College London"],
      }
    } else if (climate === "Cool/Continental") {
      return {
        country: "Canada",
        program: field,
        universities: ["University of Toronto", "McGill University"],
      }
    } else {
      return {
        country: "Germany",
        program: field,
        universities: ["Technical University of Munich", "Heidelberg University"],
      }
    }
  }

  const recommendation = getRecommendation()

  return (
    <Card className="border-none shadow-md max-w-2xl mx-auto">
      <CardContent className="p-6">
        {!showResult ? (
          <div>
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].text}</h3>

            <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <Button className="mt-6 w-full" onClick={handleNext} disabled={!selectedOption}>
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Your Perfect Match!</h3>
              <p className="text-gray-600">Based on your preferences, we recommend:</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Recommended Country</h4>
                  <p className="text-lg font-semibold">{recommendation.country}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Program</h4>
                  <p className="text-lg font-semibold">{recommendation.program}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Suggested Universities</h4>
                  <ul className="list-disc list-inside">
                    {recommendation.universities.map((uni, index) => (
                      <li key={index} className="text-gray-800">
                        {uni}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="flex-1"
                onClick={() => {
                  setCurrentQuestion(0)
                  setAnswers({})
                  setSelectedOption(null)
                  setShowResult(false)
                }}
              >
                Retake Quiz
              </Button>
              <Button variant="default" className="flex-1">
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

