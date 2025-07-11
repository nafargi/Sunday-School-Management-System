// pages/Lessons.jsx
import React,{useState} from 'react';
import LessonHeader from '../components/activities/ActivityHeader';
import LessonView from '../components/activities/ActivitiesView';
import TabSwitcher from '../components/activities/TabSwicher';
import LessonGrid from '../components/activities/CalendarView';

const Activities = () => {
   const [activeTab, setActiveTab] = useState('List View');
  
    const renderTab = () => {
    switch (activeTab) {
        case 'Calendar View':
          return <LessonGrid />;
        default:
          return <LessonView />;
      }
    };
  return (
    <div>
      <div className="p-6">
         <LessonHeader />
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
         {renderTab()}
      </div>
    </div>
  );
};

export default Activities;
