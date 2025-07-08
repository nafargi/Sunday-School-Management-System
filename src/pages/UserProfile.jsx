import React, { useState } from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import TabSwitcher from '../components/profile/TabSwitcher';
import Interests from '../components/profile/interests';
import BasicInfo from '../components/profile/BasicInfo';
import Permissions from '../components/profile/permissions';
import SundaySchool from '../components/profile/SundaySchool';
import UserInfo from '../components/profile/UserInfo'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Basic Info');

  const renderTab = () => {
     switch (activeTab) {
      case 'Interests':
        return <Interests />;
      case 'Permissions':
        return <Permissions />;
      case 'Sunday School':
        return <SundaySchool />;
      default:
        return <BasicInfo />;
    }
   
    
  };

  return (
    <div className="p-6">
      <ProfileHeader />
      <div className="flex gap-4 ">
            <UserInfo />
            <div className="flex-col w-full bg-white  rounded-xl shadow-lg shadow-[#00000009]   border border-gray-200">
                    <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
                    {renderTab()}
            </div>
            
      </div>
     
    </div>
  );
};

export default Dashboard;
