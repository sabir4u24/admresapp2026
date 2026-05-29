"use client"

import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer"

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff'
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    borderBottom: '2pt solid #1f2937',
    paddingBottom: 10,
  },
  schoolName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  schoolSubtitle: {
    fontSize: 12,
    color: '#4b5563',
  },
  studentInfo: {
    flexDirection: 'row',
    marginBottom: 20,
    border: '1pt solid #e5e7eb',
    padding: 10,
    borderRadius: 4,
  },
  photoColumn: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 4,
    objectFit: 'cover',
  },
  detailsColumn: {
    width: '75%',
    paddingLeft: 15,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    width: 100,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#374151',
  },
  value: {
    fontSize: 10,
    color: '#111827',
  },
  table: {
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 20,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tableHeader: {
    width: '25%',
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
    padding: 5,
    backgroundColor: '#f9fafb',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    width: '25%',
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
    padding: 5,
    fontSize: 10,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signatureLine: {
    borderTop: '1pt solid #1f2937',
    width: 150,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 10,
  }
})

// Create Document Component
export const PDFReportCard = ({ studentData }: { studentData: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.schoolName}>HolyBrook Public School</Text>
        <Text style={styles.schoolSubtitle}>Academic Session: {studentData.session_year || '2024-25'}</Text>
        <Text style={styles.schoolSubtitle}>Terminal Progress Report</Text>
      </View>

      {/* Student Details */}
      <View style={styles.studentInfo}>
        <View style={styles.photoColumn}>
          {studentData.student_photo ? (
            <Image src={studentData.student_photo} style={styles.photo} />
          ) : (
            <View style={{...styles.photo, backgroundColor: '#f3f4f6', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, color: '#9ca3af'}}>No Photo</Text>
            </View>
          )}
        </View>
        <View style={styles.detailsColumn}>
          <View style={styles.row}>
            <Text style={styles.label}>Student Name:</Text>
            <Text style={styles.value}>{studentData.student_name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Student ID:</Text>
            <Text style={styles.value}>{studentData.st_id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Class & Section:</Text>
            <Text style={styles.value}>{studentData.class_name} - {studentData.section}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Father's Name:</Text>
            <Text style={styles.value}>{studentData.fathers_name || 'N/A'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date of Birth:</Text>
            <Text style={styles.value}>
              {studentData.dob ? new Date(studentData.dob).toLocaleDateString() : 'N/A'}
            </Text>
          </View>
        </View>
      </View>

      {/* Marks Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Subject</Text>
          <Text style={styles.tableHeader}>Periodic Test</Text>
          <Text style={styles.tableHeader}>Exam Marks</Text>
          <Text style={{...styles.tableHeader, borderRightWidth: 0}}>Total</Text>
        </View>
        
        {studentData.marks && studentData.marks.length > 0 ? (
          studentData.marks.map((mark: any, index: number) => (
            <View style={styles.tableRow} key={index}>
              <Text style={{...styles.tableCell, textAlign: 'left'}}>{mark.subjectName}</Text>
              <Text style={styles.tableCell}>{mark.periodic_test}</Text>
              <Text style={styles.tableCell}>{mark.exam_marks}</Text>
              <Text style={{...styles.tableCell, borderRightWidth: 0}}>
                {Number(mark.periodic_test || 0) + Number(mark.exam_marks || 0)}
              </Text>
            </View>
          ))
        ) : (
          <View style={styles.tableRow}>
            <Text style={{...styles.tableCell, width: '100%', borderRightWidth: 0}}>
              No marks entered for this student.
            </Text>
          </View>
        )}
      </View>

      {/* Footer Signatures */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.signatureLine}>Class Teacher</Text>
        </View>
        <View>
          <Text style={styles.signatureLine}>Principal</Text>
        </View>
      </View>

    </Page>
  </Document>
)
