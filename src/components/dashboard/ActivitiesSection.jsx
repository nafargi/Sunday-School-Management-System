import React from 'react';
import UpcomingEventCard from './UpcomingEventCard';  
import AchievementCard from './AchievementCard';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const ActivitiesTab = () => {
 

  return (
    <div className="mt-6 space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-4">

    <div className='bg-white p-6 rounded-2xl shadow-lg shadow-[#00000009]'>
        <div className='mb-6'>
           <h2 className=" text-2xl  font-f ">Upcoming Events</h2>
           <p className='text-sm text-gray-500 '> Scheduled activities and events</p>
        </div>
       
        <div className="space-y-4">
          <UpcomingEventCard
            title="Children’s Day Celebration"
            date="June 12, 2025 • 9:00 AM – 12:00 PM"
            description="Special activities and games for all age groups"
          />
          <UpcomingEventCard
            title="Bible Story Workshop"
            date="May 28, 2025 • 10:30 AM – 11:30 AM"
            description="Interactive storytelling for Young Explorers"
            tag="Young Explorers"
          />
          <UpcomingEventCard
            title="Parent-Teacher Meeting"
            date="May 25, 2025 • 6:00 PM – 7:30 PM"
            description="Discussing summer program and activities"
          />

          <div className="border rounded-lg border-gray-200 p-2 flex items-center justify-center mt-4">
            <div className="flex ">
              <h3 className=" text-gray-800">View all Event </h3>
              <ChevronRightIcon className='w-4 font-semibold' />
           </div>
          </div>
        </div>
        
      </div>

      {/* Recent Achievements */}
      <div className='bg-white p-6 rounded-2xl shadow-xl shadow-[#00000009]'>
        <div className='mb-6'>
            <h2 className=" text-2xl ">Recent Achievements</h2>
              <p className='text-sm text-gray-500 '>Celebrating our children's accomplishments</p>
        </div>
        <div className="space-y-4 ">
          <AchievementCard
            title="Bible Verse Memorization"
            description="Faith Champions group completed John 3:16"
            date="May 5, 2025"
            color="bg-[#FEF9C3]"
            stroke="#CA8A04"
          />
          <AchievementCard
            title="Craft Competition"
            description="Young Explorers won first place"
            date="April 28, 2025"
            color="bg-[#DCFCE7]"
            stroke="#16A34A"
          />
          <AchievementCard
            title="Perfect Attendance"
            description="12 children achieved perfect attendance"
            date="April 2025"
            color="bg-[#DBEAFE]"
            stroke="#2563EB"
          />
          <div className="border rounded-lg border-gray-200 p-2 flex   mt-4 items-center justify-center">
            <div className="flex ">
              <h3 className=" text-gray-800">View all Achievements </h3>
              <ChevronRightIcon className='w-4 font-semibold' />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesTab;
