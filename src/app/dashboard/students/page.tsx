import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CSVHandler } from "@/components/dashboard/CSVHandler"

export default async function StudentsPage() {
  const students = await prisma.core_student.findMany({
    take: 50, // Limit for now
    orderBy: {
      adm_date: 'desc'
    }
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Students</h1>
        <div className="flex items-center gap-2">
          <CSVHandler />
          <Link href="/dashboard/students/add">
            <Button>Add New Student</Button>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-md shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.st_id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.st_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.student_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.section}</td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
