import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "../common/Card.jsx";
import { attendanceTrend } from "../../utils/mockData.js";

function AttendanceChart() {
  return (
    <Card className="p-5">
      <div className="mb-5">
        <h2 className="font-display text-lg font-bold text-on-surface dark:text-slate-50">
          Attendance Trend
        </h2>
        <p className="mt-1 text-sm text-on-surface-variant dark:text-slate-400">
          Daily attendance is summarized month-wise. No period-wise attendance is used.
        </p>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={attendanceTrend} margin={{ top: 10, right: 12, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="attendanceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#005ea4" stopOpacity={0.22} />
                <stop offset="95%" stopColor="#005ea4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#c0c7d4" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis domain={[80, 100]} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip formatter={(value) => [`${value}%`, "Attendance"]} />
            <Area
              type="monotone"
              dataKey="attendance"
              stroke="#005ea4"
              strokeWidth={3}
              fill="url(#attendanceFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default AttendanceChart;
