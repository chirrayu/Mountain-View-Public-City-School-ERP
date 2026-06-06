import {
  Bell,
  BookOpen,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Library,
  ReceiptIndianRupee,
  Settings,
  Users,
} from "lucide-react";

export const navigationItems = [
  { label: "Admin Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
  { label: "Teacher Dashboard", href: "/dashboard/teacher", icon: ClipboardCheck },
  { label: "Student Dashboard", href: "/dashboard/student", icon: GraduationCap },
  { label: "Parent Dashboard", href: "/dashboard/parent", icon: Bell },
  { label: "Students", href: "/students", icon: Users },
  { label: "Attendance", href: "/attendance", icon: ClipboardCheck },
  { label: "Assignments", href: "/assignments", icon: FileText },
  { label: "Exams", href: "/exams", icon: BookOpen },
  { label: "Fees", href: "/fees", icon: ReceiptIndianRupee },
  { label: "Library", href: "/library", icon: Library },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function titleFromPath(pathname) {
  const match = navigationItems.find((item) => item.href === pathname);
  if (match) return match.label;
  return "Mountain View ERP";
}
