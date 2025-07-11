import React, { useState } from 'react';
import TabSwitcher from '../components/children/TabSwitcher';
import ListViewTab from '../components/children/ListViewTab';
import GridViewTab from '../components/children/GridViewTab';
import ChildHeader from '../components/children/ChildHeader';

const Children = () => {
  const [activeTab, setActiveTab] = useState('List View');

  const renderTab = () => {
  switch (activeTab) {
      case 'Grid View':
        return <GridViewTab />;
      default:
        return <ListViewTab />;
    }
  };

  return (
    <div className="md:p-6 p-2">
      <ChildHeader />
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTab()}
    </div>
  );
};

export default Children;
