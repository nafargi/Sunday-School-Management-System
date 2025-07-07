import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const data = [
  { name: 'Male', value: 65 },
  { name: 'Female', value: 35 },
];

const COLORS = ['#3B82F6', '#EC4899']; // blue, pink

const GenderPieChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-[#00000009] p-6 w-full">
        <div className="">
            <h2 className="text-2xl  ">Gender Distribution</h2>
            <p className="text-sm text-gray-500 mb-4">Childern bg gender</p>
        </div>

        <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            label
            >
            {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
    </div>
    
  );
};

export default GenderPieChart;
