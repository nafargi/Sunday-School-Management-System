import UpcomingEventCard from './UpcomingEventCard';
import AchievementCard from './AchievementCard';
import GenderPieChart from './GenederPiaChart';
import AttendancePillChart from './AttendancePillChart';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Card from './../../app/Card'

const OverviewTab = () => {
  const data = [
    {
      title: 'Total Children',
      data: '166',
       icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-4 w-4 text-primary">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75">
                </path>
              </svg>
            ),
      stats: '+6 from last month',
    },
    {
      title: 'Present Today',
      data: '98',
       icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check h-4 w-4 text-green-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline>
      </svg>
    ),
      stats: '69% attendance rate',
    },
    {
      title: 'Absent Today',
      data: '44',
      icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-x h-4 w-4 text-red-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="17" x2="22" y1="8" y2="13"></line><line x1="22" x2="17" y1="8" y2="13"></line>
            </svg>
          ),      border: ' border-[#3BC0ED]',
      stats: '31% absence rate',
    },
    {
      title: 'New This Week',
      data: '4',
       icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus h-4 w-4 text-blue-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line>
            </svg>
          ),
      stats: '+2 from last week',
    },
  ];
  return (
    <div className="space-y-4 mt-6">
      <div className="grid  grid-cols-1 lg:grid-cols-4 gap-4">
         {data.map((group, idx) => (
                  <Card key={idx} {...group} />
                ))}
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=' w-full'>
          <AttendancePillChart />
        </div>
        <div className=' w-full'>
          <GenderPieChart />
        </div>
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
      <div className='bg-white p-4 rounded-2xl shadow-xl shadow-[#00000009]'>
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
      
    </div>
  );
};

export default OverviewTab;
