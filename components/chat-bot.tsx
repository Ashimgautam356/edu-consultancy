"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, X } from "lucide-react"

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your virtual assistant. How can I help you with your study abroad plans today?",
      isBot: true,
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (newMessage.trim() === "") return

    // Add user message
    const userMessage = { id: Date.now(), text: newMessage, isBot: false }
    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message! Our education consultants will get back to you soon. In the meantime, would you like to schedule a free consultation?",
        isBot: true,
      }
      setMessages((prevMessages) => [...prevMessages, botResponse])
    }, 1000)
  }

  return (
    <>
      {/* Chat button */}
      <Button className="fixed bottom-6 right-6 rounded-full shadow-lg z-50 w-14 h-14 p-0" onClick={toggleChat}>
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 md:w-96 shadow-xl z-50 border-none">
          <CardHeader className="bg-primary text-white py-3 px-4 flex flex-row justify-between items-center">
            <h3 className="font-semibold">Chat with Us</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-primary/80">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="p-4 h-80 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot ? "bg-gray-100 text-gray-800" : "bg-primary text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

