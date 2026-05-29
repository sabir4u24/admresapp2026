import { prisma } from "@/lib/prisma"
import { GeneratePDFButton } from "@/components/dashboard/GeneratePDFButton"

export default async function ReportsPage() {
  const students = await prisma.core_student.findMany({
    take: 20, // Limit for display
    orderBy: { adm_date: 'desc' }
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Report Cards</h1>
        <p className="text-gray-500 mt-2">Generate PDF marksheets locally in the browser.</p>
      </div>

      <div className="bg-white rounded-md shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.st_id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.st_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.student_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class_name} - {student.section}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <GeneratePDFButton studentId={student.st_id} />
                </td>
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
