import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, Heart, Bell, User, Download, Plus } from "lucide-react"
import Link from "next/link"
import { PatientNavigation } from "@/components/patient-navigation"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { NotificationSystem } from "@/components/notification-system"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function PatientDashboard() {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Rajesh Patel",
      specialty: "Cardiology",
      date: "2024-12-15",
      time: "10:00 AM",
      type: "Follow-up",
    },
    {
      id: 2,
      doctor: "Dr. Anand Mehta",
      specialty: "Dermatology",
      date: "2024-12-20",
      time: "2:30 PM",
      type: "Consultation",
    },
  ]

  const recentRecords = [
    {
      id: 1,
      type: "Lab Results",
      doctor: "Dr. Rajesh Patel",
      date: "2024-12-10",
      status: "Normal",
    },
    {
      id: 2,
      type: "Prescription",
      doctor: "Dr. Anand Mehta",
      date: "2024-12-08",
      status: "Active",
    },
    {
      id: 3,
      type: "Consultation Notes",
      doctor: "Dr. Rajesh Patel",
      date: "2024-12-05",
      status: "Completed",
    },
  ]

  const healthTips = [
    {
      id: 1,
      title: "Stay Hydrated",
      description: "Drink at least 8 glasses of water daily to maintain good health.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Regular Exercise",
      description: "30 minutes of daily exercise can significantly improve your health.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Balanced Diet",
      description: "Include fruits, vegetables, and whole grains in your daily meals.",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <PatientNavigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Arjun!</h1>
          <p className="text-gray-600">Here's an overview of your health dashboard</p>
        </div>

        {/* Health Tips Carousel */}
        <Card className="border-blue-100 mb-8 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-blue-900">Health Tips & Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full">
              <CarouselContent>
                {healthTips.map((tip) => (
                  <CarouselItem key={tip.id}>
                    <div className="p-1">
                      <div className="flex flex-col md:flex-row overflow-hidden rounded-lg bg-gradient-to-r from-blue-50 to-green-50">
                        <div className="md:w-1/3">
                          <img
                            src={tip.image || "/placeholder.svg"}
                            alt={tip.title}
                            className="h-48 w-full object-cover md:h-full"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h3 className="text-xl font-bold text-blue-900 mb-2">{tip.title}</h3>
                          <p className="text-gray-600">{tip.description}</p>
                          <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Learn More</Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Next Appointment</p>
                  <p className="text-2xl font-bold text-blue-900">Dec 15</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Health Records</p>
                  <p className="text-2xl font-bold text-green-900">24</p>
                </div>
                <FileText className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Active Prescriptions</p>
                  <p className="text-2xl font-bold text-purple-900">3</p>
                </div>
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Notifications</p>
                  <p className="text-2xl font-bold text-orange-900">2</p>
                </div>
                <Bell className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Appointments */}
          <Card className="border-blue-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-blue-900">Upcoming Appointments</CardTitle>
                <Link href="/dashboard/patient/appointments">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Book New
                  </Button>
                </Link>
              </div>
              <CardDescription>Your scheduled medical appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-blue-900">{appointment.doctor}</h4>
                      <p className="text-sm text-blue-600">{appointment.specialty}</p>
                      <p className="text-sm text-gray-600">
                        {appointment.date} at {appointment.time}
                      </p>
                    </div>
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      {appointment.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Health Records */}
          <Card className="border-green-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-green-900">Recent Health Records</CardTitle>
                <Link href="/dashboard/patient/records">
                  <Button size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    View All
                  </Button>
                </Link>
              </div>
              <CardDescription>Your latest medical records and documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRecords.map((record) => (
                  <div key={record.id} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-green-900">{record.type}</h4>
                      <p className="text-sm text-green-600">by {record.doctor}</p>
                      <p className="text-sm text-gray-600">{record.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="border-green-200 text-green-700">
                        {record.status}
                      </Badge>
                      <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 border-purple-100">
          <CardHeader>
            <CardTitle className="text-purple-900">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/dashboard/patient/appointments/book">
                <Button
                  variant="outline"
                  className="w-full h-20 flex-col border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  <Calendar className="h-6 w-6 mb-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link href="/dashboard/patient/records">
                <Button
                  variant="outline"
                  className="w-full h-20 flex-col border-green-200 text-green-700 hover:bg-green-50"
                >
                  <FileText className="h-6 w-6 mb-2" />
                  View Records
                </Button>
              </Link>
              <Link href="/dashboard/patient/prescriptions">
                <Button
                  variant="outline"
                  className="w-full h-20 flex-col border-purple-200 text-purple-700 hover:bg-purple-50"
                >
                  <Heart className="h-6 w-6 mb-2" />
                  Prescriptions
                </Button>
              </Link>
              <Link href="/dashboard/patient/profile">
                <Button
                  variant="outline"
                  className="w-full h-20 flex-col border-orange-200 text-orange-700 hover:bg-orange-50"
                >
                  <User className="h-6 w-6 mb-2" />
                  Update Profile
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <div className="mt-8">
          <NotificationSystem />
        </div>
      </main>

      <ChatbotWidget />
    </div>
  )
}
