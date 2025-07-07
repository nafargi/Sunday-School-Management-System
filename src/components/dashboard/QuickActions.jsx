// components/dashboard/QuickActions.jsx
import React from 'react';
import { 
  BookOpenIcon,
  HeartIcon,
  UserPlusIcon,
  CalendarDaysIcon,
 } from '@heroicons/react/24/outline';
const QuickActions = () => {
  return (
    <div className="quick-actions bg-white rounded-2xl shadow-lg shadow-[#00000009] p-6 ">
      <h2 className=" text-2xl ">Quick Actions</h2>
      <p className='text-sm text-gray-500 mb-6 '>Common tasks you might wnat to perform</p>
      <div className="action-list space-y-2">
        <div className='flex justify-start items-center gap-4  border p-bg border-gray-200 rounded-lg px-4 py-2'> 
          <UserPlusIcon className='w-5 h-5 text-white' />
           <p className='text-white text-sm'>Add New Child</p>
        </div>
        <div className='flex justify-start items-center gap-4 border border-gray-200 rounded-lg px-4 py-2'>
           <CalendarDaysIcon className='w-5 h-5 ' />
            <p className='text-sm'>Mark Attendance</p>
        </div>
        <div className='flex justify-start items-center gap-4 border border-gray-200 rounded-lg px-4 py-2'>
            <BookOpenIcon className='w-5 h-5 ' />
            <p className='text-sm'>Plan Lesson</p>
        </div>
        <div className='flex justify-start items-center gap-4 border border-gray-200 rounded-lg px-4 py-2'>
             <HeartIcon className='w-5 h-5 ' />
            <p className='text-sm'>Schedule Activity</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;