import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Day 1', Present: 30, Absent: 70 },
  { name: 'Day 2', Present: 55, Absent: 45 },
  { name: 'Day 3', Present: 70, Absent: 30 },
  { name: 'Day 4', Present: 85, Absent: 15 },
  { name: 'Day 5', Present: 69, Absent: 31 },
];

const AttendanceAreaGraph = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-[#00000009] p-6 w-full">
      <h2 className="text-2xl  ">Attendance Overview</h2>
      <p className="text-sm text-gray-500 mb-4">Weekly attendance over the past month

</p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="presentColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor="#10B981" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="absentColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor="#EF4444" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#EF4444" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Absent"
            stackId="1"
            stroke="#EF4444"
            fill="url(#absentColor)"
          />
          <Area
            type="monotone"
            dataKey="Present"
            stackId="1"
            stroke="#10B981"
            fill="url(#presentColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceAreaGraph;
