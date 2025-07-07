import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import TabSwitcher from '../components/dashboard/TabSwitcher';
import OverviewTab from '../components/dashboard/OverviewTab';
import AgeGroupsTab from '../components/dashboard/AgeGroupsTab';
import ActivitiesTab from '../components/dashboard/ActivitiesSection';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderTab = () => {
    switch (activeTab) {
      case 'Age Groups':
        return <AgeGroupsTab />;
      case 'Activities':
        return <ActivitiesTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="p-6">
      <DashboardHeader />
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTab()}
    </div>
  );
};

export default Dashboard;
