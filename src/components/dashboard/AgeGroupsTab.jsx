import React from 'react';
import GroupCard from './GroupCard';
import AgeGroupChart from './AgeGroupChart';

const AgeGroupsTab = () => {
  const groups = [
    {
      title: '🌟 Little Lights',
      age: '3-4 years',
      bg: 'bg-yellow-100',
      border: 'border-yellow-300',
      stats: { total: 28, present: 20, absent: 8 },
    },
    {
      title: '✨ Bright Stars',
      age: '5-6 years',
      bg: 'bg-pink-100',
      border: 'border-pink-300',
      stats: { total: 42, present: 29, absent: 13 },
    },
    {
      title: '🪐 Young Explorers',
      age: '7-8 years',
      bg: 'bg-blue-100',
      border: 'border-blue-300',
      stats: { total: 38, present: 27, absent: 11 },
    },
    {
      title: '🌱 Faith Champions',
      age: '9-10 years',
      bg: 'bg-green-100',
      border: 'border-green-300',
      stats: { total: 34, present: 24, absent: 10 },
    },
    {
      title: '👑 Kingdom Leaders',
      age: '11-12 years',
      bg: 'bg-purple-100',
      border: 'border-purple-300',
      stats: { total: 24, present: 17, absent: 7 },
    },
  ];

  return (
    <div className="space-y-6 mt-6">
      {/* Group Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, idx) => (
          <GroupCard key={idx} {...group} />
        ))}
      </div>

      {/* Bar Chart */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow border">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Age Group Distribution</h2>
        <AgeGroupChart />
      </div>
    </div>
  );
};

export default AgeGroupsTab;
