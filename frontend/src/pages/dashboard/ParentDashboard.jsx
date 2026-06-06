import PageHeader from "../../components/common/PageHeader.jsx";
import StatusPill from "../../components/common/StatusPill.jsx";
import AttendanceChart from "../../components/dashboard/AttendanceChart.jsx";
import ListCard from "../../components/dashboard/ListCard.jsx";
import StatsGrid from "../../components/dashboard/StatsGrid.jsx";
import { notices, parentStats, recentResults } from "../../utils/mockData.js";
import { formatCurrency } from "../../utils/formatters.js";

function ParentDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Parent Portal"
        title="Good morning, Sharma Family"
        description="Overview for Aryan Sharma, Class 10-A, Section A, Roll Number 24, including attendance, results, fee status, and school notices."
      />
      <StatsGrid stats={parentStats} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <AttendanceChart />
        </div>
        <div className="lg:col-span-2">
          <ListCard
            title="Fee Status"
            description="Latest account summary and fee receipt status."
            items={[
              { title: "Term I Balance", detail: `${formatCurrency(18500)} due by 15 Jun`, status: "Pending" },
              { title: "Last Fee Receipt", detail: "Receipt #MVPS-2026-0418 | Paid online", status: "Paid" },
            ]}
            renderItem={(item) => (
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-on-surface dark:text-slate-100">{item.title}</p>
                  <p className="text-sm text-on-surface-variant dark:text-slate-400">{item.detail}</p>
                </div>
                <StatusPill tone={item.status === "Paid" ? "success" : "danger"}>{item.status}</StatusPill>
              </div>
            )}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ListCard
          title="Results"
          description="Recent report card marks."
          items={recentResults}
          renderItem={(item) => (
            <div className="flex items-center justify-between gap-4">
              <p className="font-bold text-on-surface dark:text-slate-100">{item.subject}</p>
              <p className="text-sm font-bold text-on-surface-variant dark:text-slate-400">{item.marks}</p>
            </div>
          )}
        />
        <ListCard title="School Notices" description="Announcements for parents." items={notices} />
      </div>
    </>
  );
}

export default ParentDashboard;
