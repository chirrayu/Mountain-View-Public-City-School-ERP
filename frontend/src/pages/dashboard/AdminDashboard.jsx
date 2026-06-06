import { Download, Plus } from "lucide-react";
import Button from "../../components/common/Button.jsx";
import PageHeader from "../../components/common/PageHeader.jsx";
import ListCard from "../../components/dashboard/ListCard.jsx";
import StatsGrid from "../../components/dashboard/StatsGrid.jsx";
import {
  adminStats,
  announcements,
  recentActivities,
} from "../../utils/mockData.js";

function AdminDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="School Dashboard Overview"
        title="Welcome back, Principal."
        description="Monitor Mountain View City Public School for academic session 2026-27, including admissions, daily attendance, staff, and pending fee receipts."
        actions={
          <>
            <Button variant="secondary">
              <Download size={18} aria-hidden="true" />
              Export Summary
            </Button>
            <Button>
              <Plus size={18} aria-hidden="true" />
              New Entry
            </Button>
          </>
        }
      />
      <StatsGrid stats={adminStats} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ListCard
          title="Recent Activities"
          description="Latest ERP events across student records, attendance, fees, and report cards."
          items={recentActivities}
        />
        <ListCard
          title="Announcements"
          description="School-wide notices for administrators to review."
          items={announcements}
        />
      </div>
    </>
  );
}

export default AdminDashboard;
