import PageHeader from "../../components/common/PageHeader.jsx";
import StatusPill from "../../components/common/StatusPill.jsx";
import ListCard from "../../components/dashboard/ListCard.jsx";
import StatsGrid from "../../components/dashboard/StatsGrid.jsx";
import { studentAlerts, teacherStats, todaysClasses } from "../../utils/mockData.js";

function TeacherDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Teacher Workspace"
        title="Good morning, Mrs. Ananya Rao"
        description="Class teacher dashboard for Class 8-B with daily attendance, assignments to review, and student alerts."
      />
      <StatsGrid stats={teacherStats} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ListCard
          title="Today's Classes"
          description="Teaching schedule for the current school day."
          items={todaysClasses}
          renderItem={(item) => (
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-on-surface dark:text-slate-100">{item.className}</p>
                <p className="text-sm text-on-surface-variant dark:text-slate-400">
                  {item.subject} | {item.room}
                </p>
              </div>
              <StatusPill tone="info">{item.time}</StatusPill>
            </div>
          )}
        />
        <ListCard
          title="Student Alerts"
          description="Students who need attention before end of day."
          items={studentAlerts}
          renderItem={(item) => (
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-bold text-on-surface dark:text-slate-100">{item.name}</p>
                <p className="text-sm text-on-surface-variant dark:text-slate-400">{item.detail}</p>
              </div>
              <StatusPill tone={item.status === "Absent" ? "danger" : "neutral"}>{item.status}</StatusPill>
            </div>
          )}
        />
      </div>
    </>
  );
}

export default TeacherDashboard;
