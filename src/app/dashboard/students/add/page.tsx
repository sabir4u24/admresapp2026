"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CldUploadWidget } from "next-cloudinary"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { UploadCloud } from "lucide-react"

export default function AddStudentPage() {
  const router = useRouter()
  const [photoUrl, setPhotoUrl] = useState("")

  async function handleSubmit(formData: FormData) {
    // Add photoUrl to form data if available
    if (photoUrl) {
      formData.append("student_photo", photoUrl)
    }

    // Call server action here (will be implemented in actions.ts)
    console.log("Submitting form...", Object.fromEntries(formData))
    
    // Simulating success
    alert("Student added successfully (Mock)!")
    router.push("/dashboard/students")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>New Admission</CardTitle>
          <CardDescription>Enter the details for the new student.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="st_id">Student ID</Label>
                <Input id="st_id" name="st_id" required placeholder="H100002" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student_name">Full Name</Label>
                <Input id="student_name" name="student_name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="class_name">Class</Label>
                <Input id="class_name" name="class_name" required placeholder="e.g. 10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="section">Section</Label>
                <Input id="section" name="section" required placeholder="e.g. A" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Student Photo</Label>
              <div className="flex items-center gap-4">
                <CldUploadWidget 
                  uploadPreset="ml_default" // The default preset, may need configuration
                  onSuccess={(result: any) => {
                    setPhotoUrl(result?.info?.secure_url)
                  }}
                >
                  {({ open }) => {
                    return (
                      <Button type="button" variant="outline" onClick={() => open()}>
                        <UploadCloud className="w-4 h-4 mr-2" />
                        Upload Photo
                      </Button>
                    );
                  }}
                </CldUploadWidget>
                {photoUrl && (
                  <div className="text-sm text-green-600 font-medium">
                    Photo uploaded successfully!
                  </div>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full">Submit Admission</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
