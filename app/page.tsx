import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  GraduationCap,
  Award,
  Users,
  Building,
  CheckCircle,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Lock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TypewriterEffect from "@/components/typewriter-effect"
import { Timeline } from "@/components/timeline"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { ChatBot } from "@/components/chat-bot"
import { CountryCard } from "@/components/country-card"
import { BlogCard } from "@/components/blog-card"
import { WebinarCard } from "@/components/webinar-card"
import { Quiz } from "@/components/quiz"
import { PremiumFeatures } from "@/components/premium-features"
import { Navbar } from "@/components/navbar"

export default function Home() {
  const destinations = ["Australia", "USA", "UK", "Germany", "Canada", "Denmark"]

  return (
    <main className="min-h-screen bg-whitesmoke">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-whitesmoke">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Your Dream of Studying Abroad Starts Here</h1>
            <div className="h-12">
              <TypewriterEffect words={destinations} />
            </div>
            <p className="text-gray-600 text-lg">
              We guide ambitious students to prestigious universities worldwide with personalized counseling and support
              at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8" asChild>
                <Link href="/consultation">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/auth/signup">Create Account</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Diverse students at university campus"
              width={800}
              height={600}
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Unlock Premium Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create an account and pay a service fee to access exclusive features designed to make your study abroad
              journey seamless
            </p>
          </div>

          <PremiumFeatures />

          <div className="mt-12 text-center">
            <Button size="lg" className="px-8" asChild>
              <Link href="/auth/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Counseling</h3>
                <p className="text-gray-600">Personalized guidance from certified education consultants</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">95% Visa Success</h3>
                <p className="text-gray-600">Outstanding track record of successful visa applications</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">5000+ Students</h3>
                <p className="text-gray-600">Thousands of students successfully placed worldwide</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Top Partnerships</h3>
                <p className="text-gray-600">Direct partnerships with prestigious global universities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Study Destinations */}
      <section id="destinations" className="py-16 bg-whitesmoke">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Top Study Destinations</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore popular study destinations and find the perfect fit for your academic journey
          </p>

          <Tabs defaultValue="australia" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {destinations.map((destination) => (
                <TabsTrigger key={destination.toLowerCase()} value={destination.toLowerCase()}>
                  {destination}
                </TabsTrigger>
              ))}
            </TabsList>

            {destinations.map((destination) => (
              <TabsContent key={destination.toLowerCase()} value={destination.toLowerCase()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <CountryCard country={destination} />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Top Universities</h3>
                      <ul className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <li key={i} className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary mr-2" />
                            <span>
                              University {i} in {destination}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Eligibility Criteria</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-primary mr-2" />
                          <span>Academic requirements</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-primary mr-2" />
                          <span>Language proficiency</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-primary mr-2" />
                          <span>Financial documentation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1">
                        Visa Details
                      </Button>
                      <Button className="flex-1">Scholarships</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A step-by-step guide to your journey from consultation to university admission
          </p>

          <Timeline />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-whitesmoke">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear from our students who are now pursuing their dreams at top universities worldwide
          </p>

          <div className="max-w-4xl mx-auto">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Find Your Perfect Study Destination</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take our quick quiz to discover which country and program best matches your academic goals and
                preferences
              </p>
            </div>

            <Quiz />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-whitesmoke">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Button variant="outline">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              title="How to Choose the Right University"
              excerpt="Factors to consider when selecting your ideal institution abroad"
              category="University Selection"
              date="Mar 10, 2025"
            />
            <BlogCard
              title="Complete Guide to Student Visa Applications"
              excerpt="Step-by-step process to ensure a successful visa application"
              category="Visa Process"
              date="Mar 5, 2025"
            />
            <BlogCard
              title="Top Scholarships for International Students"
              excerpt="Comprehensive list of scholarships available for study abroad"
              category="Scholarships"
              date="Feb 28, 2025"
            />
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upcoming Webinars</h2>
              <p className="text-gray-600">Join our free virtual sessions to learn more about studying abroad</p>
            </div>
            <div className="flex items-center">
              <Lock className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-gray-600">Premium members get access to all recorded sessions</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WebinarCard
              title="Studying in Australia: Requirements & Opportunities"
              date="March 20, 2025"
              time="3:00 PM - 4:30 PM"
              host="Sarah Johnson"
              country="Australia"
            />
            <WebinarCard
              title="Scholarship Opportunities in the USA"
              date="March 25, 2025"
              time="5:00 PM - 6:30 PM"
              host="Michael Brown"
              country="USA"
              isPremium={true}
            />
            <WebinarCard
              title="UK Student Visa Process Explained"
              date="April 2, 2025"
              time="4:00 PM - 5:30 PM"
              host="Emma Wilson"
              country="UK"
              isPremium={true}
            />
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <ChatBot />

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">EduConsult</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner for international education consultancy, helping students achieve their academic
                dreams abroad.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#destinations" className="text-gray-400 hover:text-primary transition-colors">
                    Study Destinations
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-gray-400 hover:text-primary transition-colors">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Study Destinations</h3>
              <ul className="space-y-3">
                {destinations.map((destination) => (
                  <li key={destination}>
                    <a
                      href={`#${destination.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates on scholarships and opportunities.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="ml-2">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp Support
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} EduConsult. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

