"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Printer, Share2 } from "lucide-react"

interface PrescriptionData {
  prescriptionId: string
  date: string
  patient: {
    name: string
    id: string
    age: number
    gender: string
    phone: string
  }
  doctor: {
    name: string
    license: string
    specialty: string
  }
  diagnosis: string
  medications: Array<{
    name: string
    dosage: string
    frequency: string
    timing: string
    duration: string
    instructions: string
  }>
  generalInstructions: string
  followUpDate?: string
}

interface PrescriptionGeneratorProps {
  prescriptionData: PrescriptionData
  onGenerate?: () => void
}

export function PrescriptionGenerator({ prescriptionData, onGenerate }: PrescriptionGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleGeneratePrescription = async () => {
    setIsGenerating(true)

    // Simulate prescription generation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsGenerating(false)
    setIsGenerated(true)

    if (onGenerate) {
      onGenerate()
    }
  }

  const handleDownloadPDF = () => {
    // Create a printable version
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Prescription - ${prescriptionData.patient.name}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 20px; }
            .clinic-info { text-align: center; }
            .clinic-name { font-size: 24px; font-weight: bold; color: #2563eb; }
            .patient-info, .doctor-info { display: inline-block; width: 48%; vertical-align: top; }
            .section { margin: 20px 0; }
            .medication { background: #f8fafc; padding: 15px; margin: 10px 0; border-left: 4px solid #2563eb; }
            .footer { margin-top: 40px; text-align: right; }
            .signature { height: 60px; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="clinic-info">
              <div class="clinic-name">HealthCare+ Medical Center</div>
              <p>123 Medical Avenue, New Delhi, India<br>
              Phone: +91 11 2345 6789 | Email: info@healthcareplus.com</p>
            </div>
          </div>
          
          <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
            <div class="patient-info">
              <h3>PATIENT INFORMATION</h3>
              <p><strong>Name:</strong> ${prescriptionData.patient.name}</p>
              <p><strong>ID:</strong> ${prescriptionData.patient.id}</p>
              <p><strong>Age:</strong> ${prescriptionData.patient.age} years</p>
              <p><strong>Gender:</strong> ${prescriptionData.patient.gender}</p>
              <p><strong>Phone:</strong> ${prescriptionData.patient.phone}</p>
            </div>
            <div class="doctor-info">
              <h3>DOCTOR INFORMATION</h3>
              <p><strong>Name:</strong> ${prescriptionData.doctor.name}</p>
              <p><strong>License:</strong> ${prescriptionData.doctor.license}</p>
              <p><strong>Specialty:</strong> ${prescriptionData.doctor.specialty}</p>
              <p><strong>Date:</strong> ${prescriptionData.date}</p>
              <p><strong>Prescription ID:</strong> ${prescriptionData.prescriptionId}</p>
            </div>
          </div>
          
          <div class="section">
            <h3>DIAGNOSIS</h3>
            <p>${prescriptionData.diagnosis}</p>
          </div>
          
          <div class="section">
            <h3>MEDICATIONS</h3>
            ${prescriptionData.medications
              .map(
                (med, index) => `
              <div class="medication">
                <h4>${index + 1}. ${med.name} ${med.dosage}</h4>
                <p><strong>Frequency:</strong> ${med.frequency}, ${med.timing}</p>
                <p><strong>Duration:</strong> ${med.duration}</p>
                <p><strong>Instructions:</strong> ${med.instructions}</p>
              </div>
            `,
              )
              .join("")}
          </div>
          
          <div class="section">
            <h3>GENERAL INSTRUCTIONS</h3>
            <p>${prescriptionData.generalInstructions}</p>
          </div>
          
          ${
            prescriptionData.followUpDate
              ? `
            <div class="section">
              <h3>FOLLOW-UP</h3>
              <p>Next appointment scheduled for: ${prescriptionData.followUpDate}</p>
            </div>
          `
              : ""
          }
          
          <div class="footer">
            <div class="signature">
              <p style="font-style: italic; color: #2563eb;">Digitally Signed</p>
            </div>
            <p><strong>${prescriptionData.doctor.name}</strong></p>
            <p>${prescriptionData.doctor.license}</p>
          </div>
        </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Prescription for ${prescriptionData.patient.name}`,
          text: `Medical prescription generated on ${prescriptionData.date}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      const prescriptionText = `
Prescription for ${prescriptionData.patient.name}
Date: ${prescriptionData.date}
Prescription ID: ${prescriptionData.prescriptionId}
Doctor: ${prescriptionData.doctor.name}

Diagnosis: ${prescriptionData.diagnosis}

Medications:
${prescriptionData.medications
  .map((med, index) => `${index + 1}. ${med.name} ${med.dosage} - ${med.frequency}, ${med.timing} for ${med.duration}`)
  .join("\n")}

Instructions: ${prescriptionData.generalInstructions}
      `

      navigator.clipboard.writeText(prescriptionText)
      alert("Prescription details copied to clipboard!")
    }
  }

  return (
    <Card className="border-blue-100">
      <CardHeader>
        <CardTitle className="text-blue-900 flex items-center justify-between">
          <span>Prescription Generator</span>
          {isGenerated && <Badge className="bg-green-600">Generated</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {!isGenerated ? (
            <div className="text-center py-8">
              <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Generate Prescription</h3>
              <p className="text-gray-600 mb-6">
                Review all details and click generate to create the digital prescription
              </p>
              <Button
                onClick={handleGeneratePrescription}
                disabled={isGenerating}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Prescription
                  </>
                )}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center py-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-green-600 mb-2">✓</div>
                <h3 className="text-lg font-semibold text-green-900">Prescription Generated Successfully!</h3>
                <p className="text-green-700">Prescription ID: {prescriptionData.prescriptionId}</p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <Button onClick={handleDownloadPDF} className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>

                <Button
                  onClick={handleDownloadPDF}
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </Button>

                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="border-green-200 text-green-600 hover:bg-green-50"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>Prescription has been saved to patient records</p>
                <p>Email notification sent to patient: {prescriptionData.patient.name}</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
