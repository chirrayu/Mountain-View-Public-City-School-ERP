import {
  AlertTriangle,
  BookOpenCheck,
  CalendarCheck,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  IndianRupee,
  Megaphone,
  Receipt,
  Users,
} from "lucide-react";

export const adminStats = [
  { label: "Total Students", value: "1,248", meta: "+42 new admissions", icon: Users, tone: "primary" },
  { label: "Total Teachers", value: "86", meta: "78 present today", icon: GraduationCap, tone: "secondary" },
  { label: "Attendance Today", value: "94.8%", meta: "Present / Absent / Half Day", icon: CalendarCheck, tone: "tertiary" },
  { label: "Pending Fees", value: "₹12.4L", meta: "Fee receipts due this week", icon: IndianRupee, tone: "primary" },
];

export const recentActivities = [
  "Class 8-B attendance marked for 41 students.",
  "Fee receipt generated for Aarav Sharma, Class 10-B.",
  "Report card draft published for Class 6-A.",
  "Library return reminder sent to Class 9-C.",
];

export const announcements = [
  { title: "Annual Day rehearsal", detail: "Classes 6 to 10 report to auditorium at 11:30 AM." },
  { title: "Academic session update", detail: "Session 2026-27 timetable review closes Friday." },
  { title: "Fee counter timing", detail: "Accounts office open 9:30 AM to 2:00 PM on working days." },
];

export const teacherStats = [
  { label: "Today's Classes", value: "5", meta: "Class 8-B, 9-A, 10-B", icon: BookOpenCheck, tone: "primary" },
  { label: "Pending Attendance", value: "2", meta: "Class 7-A and 8-B", icon: CalendarCheck, tone: "tertiary" },
  { label: "Assignments To Review", value: "38", meta: "Science practical files", icon: ClipboardList, tone: "secondary" },
  { label: "Student Alerts", value: "4", meta: "Follow up needed", icon: AlertTriangle, tone: "tertiary" },
];

export const todaysClasses = [
  { time: "09:00 AM", className: "Class 8-B", subject: "Science", room: "Lab 2" },
  { time: "10:15 AM", className: "Class 9-A", subject: "Biology", room: "Room 204" },
  { time: "12:10 PM", className: "Class 10-B", subject: "Chemistry", room: "Lab 1" },
];

export const studentAlerts = [
  { name: "Ishita Verma", detail: "Absent for 2 consecutive days", status: "Absent" },
  { name: "Kabir Khan", detail: "Report card remarks pending", status: "Pending" },
  { name: "Maya Das", detail: "Assignment resubmission requested", status: "Review" },
];

export const studentStats = [
  { label: "Attendance Percentage", value: "94%", meta: "Present: 141 | Absent: 7 | Half Day: 2", icon: CalendarCheck, tone: "primary" },
  { label: "Upcoming Assignments", value: "4", meta: "Next due: Mathematics worksheet", icon: ClipboardList, tone: "secondary" },
  { label: "Upcoming Exams", value: "3", meta: "Science unit test on 12 Jun", icon: BookOpenCheck, tone: "tertiary" },
  { label: "Recent Results", value: "88%", meta: "Best subject: Social Science", icon: FileCheck2, tone: "primary" },
];

export const attendanceTrend = [
  { month: "Jan", attendance: 92 },
  { month: "Feb", attendance: 95 },
  { month: "Mar", attendance: 93 },
  { month: "Apr", attendance: 96 },
  { month: "May", attendance: 94 },
];

export const upcomingAssignments = [
  { title: "Mathematics worksheet", due: "10 Jun", classInfo: "Class 10-B" },
  { title: "Hindi essay submission", due: "13 Jun", classInfo: "Class 10-B" },
  { title: "Science practical record", due: "15 Jun", classInfo: "Lab file" },
];

export const recentResults = [
  { subject: "Mathematics", marks: "82/100", status: "Good" },
  { subject: "Social Science", marks: "91/100", status: "Excellent" },
  { subject: "English", marks: "86/100", status: "Good" },
];

export const parentStats = [
  { label: "Child Attendance", value: "94%", meta: "Class 10-A | Roll No: 24", icon: CalendarCheck, tone: "primary" },
  { label: "Results", value: "88%", meta: "Latest report card average", icon: FileCheck2, tone: "secondary" },
  { label: "Fee Status", value: "₹18,500", meta: "Due by 15 Jun", icon: Receipt, tone: "tertiary" },
  { label: "School Notices", value: "6", meta: "2 require acknowledgement", icon: Megaphone, tone: "primary" },
];

export const notices = [
  "Parent-teacher meeting for Class 10-A on Saturday.",
  "Term exam admit cards will be issued after fee receipt verification.",
  "School transport route updates effective Monday.",
];
