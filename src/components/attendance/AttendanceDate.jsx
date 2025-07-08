import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon,CalendarIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';

const AttendanceDate = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handlePrevious = () => {
    setSelectedDate(prev => prev.subtract(1, 'day'));
  };

  const handleNext = () => {
    setSelectedDate(prev => prev.add(1, 'day'));
  };

  return (
    <div className="flex items-center  p-6 space-x-4 bg-white rounded-2xl shadow-xl shadow-[#00000009] w-full ">
      
          <div className="">
              <div className="">
              <h2 className="text-2xl"> Attendance Date</h2>
              <p className='text-sm text-gray-500 mb-6'>Select the date to record attendance</p>
          </div>
          <div className=" flex items-center justify-between space-x-4">
              <button
                onClick={handlePrevious}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
              </button>

              <div className="text-gray-800 ">
                <CalendarIcon className="inline w-5 h-5 mr-2 text-blue-500" />
                {selectedDate.format('dddd, MMMM D, YYYY')}
              </div>

              <button
                onClick={handleNext}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-700" />
              </button>
          </div>
      </div>
      
    </div>
  );
};

export default AttendanceDate;
