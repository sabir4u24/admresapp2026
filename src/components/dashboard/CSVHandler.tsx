"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Upload } from "lucide-react"
import Papa from "papaparse"
import { importStudentsCSV, getAllStudentsForExport } from "@/app/dashboard/students/actions"

export function CSVHandler() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isImporting, setIsImporting] = useState(false)
  const [isExporting, setIsExporting] = useState(false)

  const handleImportClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsImporting(true)

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        try {
          const res = await importStudentsCSV(results.data)
          if (res.error) {
            alert("Error: " + res.error)
          } else {
            alert(`Successfully imported ${res.count} students!`)
          }
        } catch (err) {
          alert("Import failed.")
        } finally {
          setIsImporting(false)
          if (fileInputRef.current) {
            fileInputRef.current.value = ""
          }
        }
      },
      error: () => {
        alert("Failed to parse CSV file.")
        setIsImporting(false)
      }
    })
  }

  const handleExport = async () => {
    setIsExporting(true)
    try {
      const res = await getAllStudentsForExport()
      if (res.error || !res.students) {
        alert("Error exporting data.")
        return
      }

      const csv = Papa.unparse(res.students)
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
      const url = URL.createObjectURL(blob)
      
      const link = document.createElement("a")
      link.setAttribute("href", url)
      link.setAttribute("download", `students_export_${new Date().toISOString().split('T')[0]}.csv`)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      alert("Export failed.")
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="flex gap-2">
      <input 
        type="file" 
        accept=".csv" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
      />
      <Button 
        variant="outline" 
        onClick={handleImportClick} 
        disabled={isImporting}
      >
        <Upload className="w-4 h-4 mr-2" />
        {isImporting ? "Importing..." : "Import CSV"}
      </Button>
      
      <Button 
        variant="outline" 
        onClick={handleExport}
        disabled={isExporting}
      >
        <Download className="w-4 h-4 mr-2" />
        {isExporting ? "Exporting..." : "Export CSV"}
      </Button>
    </div>
  )
}
