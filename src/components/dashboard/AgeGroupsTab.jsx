import React from 'react';
import GroupCard from './GroupCard';
import AgeGroupChart from './AgeGroupChart';

const AgeGroupsTab = () => {
  const groups = [
    {
      title: '🌟 Little Lights',
      age: '3-4 years',
      bg: ' bg-gradient-to-r from-[#F6EDE3] to-[#F8EDD3]',
      border: ' border-[#FCE388]',
      stats: { total: 28, present: 20, absent: 8 },
    },
    {
      title: '✨ Bright Stars',
      age: '5-6 years',
      bg: ' bg-gradient-to-r from-[#F8DBF1] to-[#FACFED]',
      border: ' border-[#FF7AC6]',
      stats: { total: 42, present: 29, absent: 13 },
    },
    {
      title: '🧭 Young Explorers',
      age: '7-8 years',
      bg: ' bg-gradient-to-r from-[#CCE9FB] to-[#B1E2F8]',
      border: ' border-[#3BC0ED]',
      stats: { total: 38, present: 27, absent: 11 },
    },
    {
      title: '🛡️ Faith Champions',
      age: '9-10 years',
       bg: ' bg-gradient-to-r from-[#CAE6DC] to-[#A6DAC0]',
      border: ' border-[#28AF60]',
      stats: { total: 34, present: 24, absent: 10 },
    },
    {
      title: '👑 Kingdom Leaders',
      age: '11-12 years',
      bg: ' bg-gradient-to-r from-[#DCCDFA] to-[#CAB0F8]',
      border: ' border-[#7C3BED]',
      stats: { total: 24, present: 17, absent: 7 },
    },
  ];

  return (
    <div className="space-y-6 mt-6  rounded-2xl ">
      {/* Group Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, idx) => (
          <GroupCard key={idx} {...group} />
        ))}
      </div>

      {/* Bar Chart */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-xl shadow-[#00000009]">
        <h2 className="text-lg   ">Age Group Distribution</h2>
        <p className='mb-4 text-sm text-gray-500'>Children by age group</p>
        <AgeGroupChart />
      </div>
    </div>
  );
};

export default AgeGroupsTab;
