"use server"

import { prisma } from "@/lib/prisma"

export async function getStudentReportData(studentId: string) {
  try {
    const student = await prisma.core_student.findUnique({
      where: { st_id: studentId },
      include: {
        core_marksentry: {
          include: {
            core_subject: true
          }
        },
        core_coscholasticresult: true
      }
    })

    if (!student) {
      return { error: "Student not found" }
    }

    // Transform into exactly the JSON format the PDF generator expects
    const marks = student.core_marksentry.map(mark => ({
      subjectName: mark.core_subject.name,
      periodic_test: mark.periodic_test,
      notebook: mark.notebook,
      subject_enrichment: mark.subject_enrichment,
      exam_marks: mark.exam_marks,
      term: mark.term
    }))

    const reportData = {
      ...student,
      marks: marks
    }

    return { student: reportData }

  } catch (error) {
    console.error("Error fetching report data:", error)
    return { error: "Failed to fetch student report data" }
  }
}
