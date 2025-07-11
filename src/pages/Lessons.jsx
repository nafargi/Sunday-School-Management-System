// pages/Lessons.jsx
import React,{useState} from 'react';
import LessonHeader from '../components/Lessons/LessonHeader';
import LessonView from '../components/Lessons/LessonView';
import TabSwitcher from '../components/Lessons/TabSwitcher';
import LessonGrid from '../components/Lessons/CalancerView';

const Lessons = () => {
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
      <div className="md:p-6 p-2">
         <LessonHeader />
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
         {renderTab()}
      </div>
    </div>
  );
};

export default Lessons;
