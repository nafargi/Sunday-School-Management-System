import React from 'react'
import { 
  BookOpenIcon,
  ChevronRightIcon ,
  UserPlusIcon,
  CalendarDaysIcon,
 } from '@heroicons/react/24/outline';
function RecentActivities() {
  return (

    <div className="quick-actions bg-white rounded-2xl shadow-lg shadow-[#00000009] p-6 ">
      <h2 className=" text-2xl ">    Recent Activities </h2>
      <p className='text-sm text-gray-500 mb-6 '>Latest updates and notifications</p>
      <div className="action-list space-y-2">
        <div className='flex justify-start items-center gap-4  rounded-lg px-4 py-2'> 
           <div className="light-p-bg rounded-full p-1">
            <UserPlusIcon className='w-5 h-5 p-text' />
           </div>
          
          <div className="">
            <p className=''>New child registration</p>
            <p className=' text-sm  text-gray-500'>Emma Thompson was added to Little Lights class</p>
            <p className=' text-sm  text-gray-500'>2 hours ago</p>
          </div>
           
        </div>
        <div className='flex justify-start items-center gap-4  rounded-lg px-4 py-2'>
           <div className="light-p-bg rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check h-4 w-4 text-green-600"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
           </div>
           
           <div className="">
             <p className=''>Attendance marked</p>
             <p className=' text-sm  text-gray-500'>Attendance for May 12 has been completed</p>
             <p className=' text-sm  text-gray-500'>Yesterday</p>
           </div>

           
        </div>
        <div className='flex justify-start items-center gap-4  rounded-lg px-4 py-2'>
            <div className="light-p-bg rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-check h-4 w-4 text-blue-600"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
            </div>
            
            <div className="">
                <p className=''>Permission form updated</p>
                <p className=' text-sm  text-gray-500'>Michael Scott's photo permission was updated</p>
                <p className=' text-sm  text-gray-500'>2 days ago</p>
            </div>
            
        </div>
         <div className="border rounded-lg border-gray-200 p-2 flex   mt-4 items-center justify-center">
            <div className="flex ">
            <h3 className=" text-gray-800">View all Achievements </h3>
            <ChevronRightIcon className='w-4 font-semibold' />

           </div>
          </div>
      </div>
    </div>
  )
}

export default RecentActivities
