import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Heart, User, Stethoscope } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">HealthCare+</span>
          </Link>
          <p className="text-gray-600">Create your account to get started</p>
        </div>

        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-900">Create Account</CardTitle>
            <CardDescription>Choose your role and fill in your details</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="patient" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="patient" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Patient Registration
                </TabsTrigger>
                <TabsTrigger value="doctor" className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" />
                  Doctor Registration
                </TabsTrigger>
              </TabsList>

              <TabsContent value="patient" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-first-name">First Name</Label>
                    <Input id="patient-first-name" placeholder="Arjun" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patient-last-name">Last Name</Label>
                    <Input id="patient-last-name" placeholder="Sharma" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient-email">Email</Label>
                  <Input id="patient-email" type="email" placeholder="arjun.sharma@gmail.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient-phone">Phone Number</Label>
                  <Input id="patient-phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-dob">Date of Birth</Label>
                    <Input id="patient-dob" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patient-gender">Gender</Label>
                    <Select>
                      <SelectTrigger id="patient-gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient-address">Address</Label>
                  <Textarea id="patient-address" placeholder="Alkapuri, Vadodara, Gujarat" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient-password">Password</Label>
                  <Input id="patient-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient-confirm-password">Confirm Password</Label>
                  <Input id="patient-confirm-password" type="password" />
                </div>
                <Link href="/dashboard/patient">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Create Patient Account</Button>
                </Link>
              </TabsContent>

              <TabsContent value="doctor" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor-first-name">First Name</Label>
                    <Input id="doctor-first-name" placeholder="Dr. Rajesh" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doctor-last-name">Last Name</Label>
                    <Input id="doctor-last-name" placeholder="Patel" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-email">Email</Label>
                  <Input id="doctor-email" type="email" placeholder="dr.rajesh.patel@gmail.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-phone">Phone Number</Label>
                  <Input id="doctor-phone" type="tel" placeholder="+91 98765 12345" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor-license">Medical License</Label>
                    <Input id="doctor-license" placeholder="MCI-123456" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doctor-specialty">Specialty</Label>
                    <Select>
                      <SelectTrigger id="doctor-specialty">
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="dermatology">Dermatology</SelectItem>
                        <SelectItem value="endocrinology">Endocrinology</SelectItem>
                        <SelectItem value="family-medicine">Family Medicine</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="psychiatry">Psychiatry</SelectItem>
                        <SelectItem value="ayurveda">Ayurveda</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-clinic">Clinic/Hospital</Label>
                  <Input id="doctor-clinic" placeholder="Vadodara Medical Center" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-experience">Years of Experience</Label>
                  <Input id="doctor-experience" type="number" placeholder="5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-password">Password</Label>
                  <Input id="doctor-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-confirm-password">Confirm Password</Label>
                  <Input id="doctor-confirm-password" type="password" />
                </div>
                <Link href="/dashboard/doctor">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Create Doctor Account</Button>
                </Link>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <Link href="/login" className="text-sm text-blue-600 hover:underline">
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
