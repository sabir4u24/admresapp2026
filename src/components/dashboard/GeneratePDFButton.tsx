"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

// Dynamically import PDFDownloadLink so it never runs on the server
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
)

// Dynamically import the PDF component itself
import { PDFReportCard } from "./PDFReportCard"
import { getStudentReportData } from "@/app/dashboard/reports/actions"

export function GeneratePDFButton({ studentId }: { studentId: string }) {
  const [loading, setLoading] = useState(false)
  const [studentData, setStudentData] = useState<any>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleFetchData = async () => {
    setLoading(true)
    try {
      const data = await getStudentReportData(studentId)
      if (data.error) {
        alert(data.error)
      } else {
        setStudentData(data.student)
      }
    } catch (err) {
      alert("Failed to fetch student data")
    } finally {
      setLoading(false)
    }
  }

  if (!isClient) return <Button variant="outline" disabled><FileText className="w-4 h-4 mr-2" /> Loading...</Button>

  if (!studentData) {
    return (
      <Button variant="outline" onClick={handleFetchData} disabled={loading}>
        <FileText className="w-4 h-4 mr-2" />
        {loading ? "Preparing Data..." : "Generate PDF"}
      </Button>
    )
  }

  return (
    <PDFDownloadLink
      document={<PDFReportCard studentData={studentData} />}
      fileName={`Marksheet_${studentData.st_id}.pdf`}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
    >
      {({ blob, url, loading: pdfLoading, error }) =>
        pdfLoading ? "Rendering PDF..." : "Download PDF"
      }
    </PDFDownloadLink>
  )
}
