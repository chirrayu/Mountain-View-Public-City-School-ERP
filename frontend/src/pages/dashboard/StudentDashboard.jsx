import PageHeader from "../../components/common/PageHeader.jsx";
import StatusPill from "../../components/common/StatusPill.jsx";
import AttendanceChart from "../../components/dashboard/AttendanceChart.jsx";
import ListCard from "../../components/dashboard/ListCard.jsx";
import StatsGrid from "../../components/dashboard/StatsGrid.jsx";
import { recentResults, studentStats, upcomingAssignments } from "../../utils/mockData.js";

function StudentDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Student Portal"
        title="Good morning, Aarav"
        description="Class 10-B | Section B | Roll Number 12. Review attendance percentage, upcoming assignments, exams, and recent report card results."
      />
      <StatsGrid stats={studentStats} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <AttendanceChart />
        </div>
        <div className="lg:col-span-2">
          <ListCard
            title="Upcoming Assignments"
            description="Work due in the next seven school days."
            items={upcomingAssignments}
            renderItem={(item) => (
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-on-surface dark:text-slate-100">{item.title}</p>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400">{item.classInfo}</p>
                </div>
                <StatusPill tone="info">{item.due}</StatusPill>
              </div>
            )}
          />
        </div>
      </div>
      <ListCard
        title="Recent Results"
        description="Latest marks from the report card register."
        items={recentResults}
        renderItem={(item) => (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:items-center">
            <p className="font-bold text-on-surface dark:text-slate-100">{item.subject}</p>
            <p className="text-sm text-on-surface-variant dark:text-slate-400">{item.marks}</p>
            <div className="sm:text-right">
              <StatusPill tone="success">{item.status}</StatusPill>
            </div>
          </div>
        )}
      />
    </>
  );
}

export default StudentDashboard;
