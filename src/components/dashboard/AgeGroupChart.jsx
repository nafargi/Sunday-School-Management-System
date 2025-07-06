import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Little Lights', children: 28 },
  { name: 'Bright Stars', children: 42 },
  { name: 'Young Explorers', children: 38 },
  { name: 'Faith Champions', children: 34 },
  { name: 'Kingdom Leaders', children: 24 },
];

const AgeGroupChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="children" fill="#7C3BED" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AgeGroupChart;
