"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function importStudentsCSV(data: any[]) {
  if (!data || data.length === 0) return { error: "No data provided" }

  try {
    // Basic mapping, assuming CSV headers exactly match model or are mapped correctly
    const validStudents = data.filter((row) => row.st_id && row.student_name).map(row => ({
      st_id: String(row.st_id),
      student_name: String(row.student_name),
      class_name: String(row.class_name || ""),
      section: String(row.section || ""),
      adm_date: new Date(row.adm_date || new Date()),
      session_year: String(row.session_year || "2024-25"),
      school_branch: String(row.school_branch || "Main"),
      stream: String(row.stream || "General"),
      sex: String(row.sex || "M"),
      dob: new Date(row.dob || new Date()),
      fathers_name: String(row.fathers_name || ""),
      contact_1: String(row.contact_1 || "")
    }))

    if (validStudents.length === 0) {
      return { error: "No valid student rows found. Make sure 'st_id' and 'student_name' exist." }
    }

    // Upsert or CreateMany. createMany with skipDuplicates is safer.
    const result = await prisma.core_student.createMany({
      data: validStudents,
      skipDuplicates: true,
    })

    revalidatePath("/dashboard/students")
    return { success: true, count: result.count }
  } catch (error) {
    console.error("CSV Import Error:", error)
    return { error: "Failed to import database" }
  }
}

export async function getAllStudentsForExport() {
  try {
    const students = await prisma.core_student.findMany({
      orderBy: { st_id: "asc" }
    });
    return { success: true, students };
  } catch (error) {
    return { error: "Failed to fetch students for export" }
  }
}
