import UpcomingEventCard from './UpcomingEventCard';
import AchievementCard from './AchievementCard';
import GenderPieChart from './GenederPiaChart';
import AttendancePillChart from './AttendancePillChart';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Card from './../../app/Card'
import QuickActions from './QuickActions';
import RecentActivities from './RecentActivities';

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
          <AttendancePillChart />
          <GenderPieChart />
          <QuickActions />
          <RecentActivities />
      </div>
      
    </div>
  );
};

export default OverviewTab;
