"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: string[]
  delay?: number
}

export default function TypewriterEffect({ words, delay = 3000 }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current word being processed
      const currentWord = words[currentWordIndex]

      // If deleting
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster when deleting
      } else {
        // If typing
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        setTypingSpeed(150) // Normal typing speed
      }

      // If word is complete and not deleting yet
      if (!isDeleting && currentText === currentWord) {
        // Pause at the end of the word
        setTimeout(() => setIsDeleting(true), delay)
        setTypingSpeed(delay)
      }
      // If deletion is complete
      else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((currentWordIndex + 1) % words.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, delay, typingSpeed])

  return (
    <div className="text-2xl md:text-3xl font-semibold text-primary">
      Study in <span className="border-r-2 border-primary pr-1">{currentText}</span>
    </div>
  )
}

