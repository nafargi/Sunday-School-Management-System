import React  from 'react';
import { useState } from 'react';
import PermissionHeader from '../components/permission/PermissionHeader';
import Card  from '../app/Card';
import TabSwitcher from '../components/permission/TabSwitcher';
import AllChildren from '../components/permission/AllChildren';
import PermissionHistory from '../components/permission/PermissionHistory';
import MissingPermission from '../components/permission/MissingPermissions';
const Permissions = () => {
    const data = [
    {
      title: 'Photo Permission',
      data: '6',
       icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera h-4 w-4 text-[#3b82f6]"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle>
              </svg>
            ),
      stats: '75% of Children',
    },
    {
      title: 'Outings Permission',
      data: '6',
       icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-spreadsheet h-4 w-4 text-[#10b981]"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path>
        </svg>
    ),
      stats: '69% of Children',
    },
    {
      title: 'Snack Permission',
      data: '44',
      icon: (
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie h-4 w-4 text-[#f59e0b]"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
          ),      border: ' border-[#3BC0ED]',
      stats: '31% of Children',
    },
    {
      title: 'Social Media',
      data: '4',
       icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2 h-4 w-4 text-[#6366f1]"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
          ),
      stats: '25% of Children',
    },
    {
      title: 'Completion',
      data: '63%',
       icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-4 w-4 text-[#ec4899]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
          ),
      stats: '6  Children missing permissions',
    },
  ];
  const [activeTab, setActiveTab] = useState('All Children');

  const renderTab = () => {
    switch (activeTab) {
      case 'Missing Permissions':
        return <MissingPermission />;
      case 'Permission History':
        return <PermissionHistory />;
      default:
        return <AllChildren />;
    }
  };

  return (
    <div className='p-6'>
     <PermissionHeader  />
       <div className="grid  grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
         {data.map((group, idx) => (
                  <Card key={idx} {...group} />
          ))}
      </div>
     <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTab()}
    </div>
  );
};

export default Permissions;
