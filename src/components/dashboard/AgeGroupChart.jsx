import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from 'recharts';

const data = [
  { name: 'Little Lights', children: 28, fill: '#FCE388' },
  { name: 'Bright Stars', children: 42, fill: '#FF7AC6' },
  { name: 'Young Explorers', children: 38, fill: '#3BC0ED' },
  { name: 'Faith Champions', children: 34, fill: '#28AF60' },
  { name: 'Kingdom Leaders', children: 24, fill: '#7C3BED' },
];

const AgeGroupChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300} >
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="children" radius={[8, 8, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AgeGroupChart;
