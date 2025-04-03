import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { GraduationCap, CreditCard, Building, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-whitesmoke">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">EduConsult</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Premium Membership</h1>
            <p className="text-gray-600">Choose your payment method to unlock all premium features</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Select how you'd like to pay for your membership</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="online">
                    <TabsList className="grid grid-cols-2 mb-6">
                      <TabsTrigger value="online">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Pay Online
                      </TabsTrigger>
                      <TabsTrigger value="office">
                        <Building className="h-4 w-4 mr-2" />
                        Visit Office
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="online">
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-medium mb-3 block">Select Card Type</Label>
                          <RadioGroup defaultValue="credit" className="flex space-x-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="credit" id="credit" />
                              <Label htmlFor="credit">Credit Card</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="debit" id="debit" />
                              <Label htmlFor="debit">Debit Card</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" placeholder="John Smith" />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <div className="relative">
                              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="saveCard" />
                          <Label htmlFor="saveCard">Save card for future payments</Label>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="office">
                      <div className="space-y-6">
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Visit Our Office</h3>
                          <p className="text-gray-600 text-sm mb-4">
                            You can visit any of our branch offices to make the payment in person. Your premium features
                            will be activated within 24-48 hours after payment.
                          </p>

                          <div className="space-y-4">
                            <div className="bg-white p-3 rounded-md border border-gray-200">
                              <h4 className="font-medium">Main Office</h4>
                              <p className="text-sm text-gray-600">
                                123 Education Street, Suite 101, New York, NY 10001
                              </p>
                              <p className="text-sm text-gray-600 mt-1">Mon-Fri: 9:00 AM - 6:00 PM</p>
                            </div>

                            <div className="bg-white p-3 rounded-md border border-gray-200">
                              <h4 className="font-medium">Downtown Branch</h4>
                              <p className="text-sm text-gray-600">456 University Avenue, Chicago, IL 60601</p>
                              <p className="text-sm text-gray-600 mt-1">Mon-Fri: 9:00 AM - 5:00 PM</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="notes">Special Instructions (Optional)</Label>
                          <Input id="notes" placeholder="Any specific requirements or questions" />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/">Cancel</Link>
                  </Button>
                  <Button>Complete Payment</Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card className="border-none shadow-md sticky top-24">
                <CardHeader className="bg-primary/5">
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Premium Membership</span>
                      <span className="font-medium">$299.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Service Fee</span>
                      <span>$20.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Tax</span>
                      <span>$31.90</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-bold">
                      <span>Total</span>
                      <span>$350.90</span>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-50 p-3 rounded-lg">
                    <div className="flex">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-green-800">What You'll Get</h4>
                        <ul className="text-sm text-green-700 mt-2 space-y-1">
                          <li>• One-on-One Expert Counseling</li>
                          <li>• Community Networking</li>
                          <li>• Live Sessions & Webinars</li>
                          <li>• Document Process Tracking</li>
                          <li>• 12 Months of Premium Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

