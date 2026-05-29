import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"

export default async function MarksEntryPage() {
  // Fetch distinct classes to display selection grid
  const distinctClasses = await prisma.core_student.findMany({
    select: {
      class_name: true,
      section: true,
    },
    distinct: ['class_name', 'section'],
    orderBy: [
      { class_name: 'asc' },
      { section: 'asc' }
    ]
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Marks Entry</h1>
        <p className="text-gray-500 mt-2">Select a class and section to enter marks.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {distinctClasses.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border flex flex-col justify-between hover:border-indigo-500 transition">
            <div>
              <h3 className="text-xl font-semibold">Class {item.class_name}</h3>
              <p className="text-gray-500">Section {item.section}</p>
            </div>
            <div className="mt-4 pt-4 border-t flex justify-end">
              <Button variant="outline" className="w-full">Enter Marks</Button>
            </div>
          </div>
        ))}
        {distinctClasses.length === 0 && (
          <div className="col-span-full p-8 text-center bg-white rounded-lg shadow text-gray-500">
            No classes found. Add some students first.
          </div>
        )}
      </div>
    </div>
  )
}
