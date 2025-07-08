import React from 'react'
import { useState } from 'react';
function RecentAttendance() {
 const [attendance, setAttendance] = useState({
    Wed: { count: 2, present: false },
    Thu: { count: 3, present: true },
    Fri: { count: 4, present: true },
    Sat: { count: 5, present: false },
    Sun: { count: 6, present: true },
    Mon: { count: 7, present: false },
    Tue: { count: 8, present: true }
  });

  const toggleDay = (day) => {
    setAttendance(prev => ({
      ...prev,
      [day]: { ...prev[day], present: !prev[day].present }
    }));
  };

  return (
    <div className=" p-4 ">
      {/* Header 
*/}            <h1 className="text-lg mb-3"> Recent Attendance</h1>

      <div className="flex justify-between mb-1  text-gray-600">
        {Object.keys(attendance).map(day => (
          <div key={day} className="w-10 text-center text-sm">
            {day}
          </div>
        ))}
      </div>

      {/* Count Row */}
      <div className="flex justify-between mb-2 text-gray-800">
        {Object.entries(attendance).map(([day, data]) => (
          <div key={day} className="w-10 text-center ">
            {data.count}
          </div>
        ))}
      </div>

      {/* Status Indicators */}
      <div className="flex justify-between px-2.5">
        {Object.entries(attendance).map(([day, data]) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`w-4 h-4 rounded-full flex items-center justify-center text-white cursor-pointer transition-colors ${
              data.present 
                ? 'bg-green-300  hover:bg-green-600' 
                : 'bg-red-300 hover:bg-red-600'
            }`}
          >
            {data.present ? '✓' : '✗'}
          </button>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 flex justify-between text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
          <span>Present</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
          <span>Absent</span>
        </div>
      </div>
    </div>
  );
};

export default RecentAttendance
