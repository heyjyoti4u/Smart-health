import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, User, Stethoscope, Shield } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">HealthCare+</span>
          </Link>
          <p className="text-gray-600">Welcome back to your health dashboard</p>
        </div>

        <Card className="border-blue-100 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-900">Sign In</CardTitle>
            <CardDescription>Choose your role and sign in to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="patient" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="patient" className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Patient
                </TabsTrigger>
                <TabsTrigger value="doctor" className="flex items-center gap-1">
                  <Stethoscope className="h-4 w-4" />
                  Doctor
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  Admin
                </TabsTrigger>
              </TabsList>

              <TabsContent value="patient" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="patient-email">Email</Label>
                  <Input id="patient-email" type="email" placeholder="patient@healthcare.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient-password">Password</Label>
                  <Input id="patient-password" type="password" placeholder="••••••" />
                </div>
                <Link href="/dashboard/patient">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign In as Patient</Button>
                </Link>
              </TabsContent>

              <TabsContent value="doctor" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="doctor-email">Email</Label>
                  <Input id="doctor-email" type="email" placeholder="doctor@healthcare.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-password">Password</Label>
                  <Input id="doctor-password" type="password" placeholder="••••••" />
                </div>
                <Link href="/dashboard/doctor">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign In as Doctor</Button>
                </Link>
              </TabsContent>

              <TabsContent value="admin" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <Input id="admin-email" type="email" placeholder="admin@healthcare.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input id="admin-password" type="password" placeholder="••••••" />
                </div>
                <Link href="/dashboard/admin">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign In as Admin</Button>
                </Link>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot your password?
              </Link>
            </div>

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">Don't have an account? </span>
              <Link href="/register" className="text-sm text-blue-600 hover:underline">
                Sign up here
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500 mb-4">Quick access for demo</p>
              <div className="grid grid-cols-3 gap-3">
                <Link href="/dashboard/patient">
                  <Button variant="outline" size="sm" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                    <User className="h-4 w-4 mr-1" />
                    Patient Demo
                  </Button>
                </Link>
                <Link href="/dashboard/doctor">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-green-200 text-green-600 hover:bg-green-50"
                  >
                    <Stethoscope className="h-4 w-4 mr-1" />
                    Doctor Demo
                  </Button>
                </Link>
                <Link href="/dashboard/admin">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                  >
                    <Shield className="h-4 w-4 mr-1" />
                    Admin Demo
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
