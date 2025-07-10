// pages/Lessons.jsx
import React from 'react';
import LessonHeader from '../components/Lessons/LessonHeader';
import LessonView from '../components/Lessons/LessonView';

const Lessons = () => {
  return (
    <div>
      <div className="p-6">
         <LessonHeader />
        <LessonView />
      </div>
    </div>
  );
};

export default Lessons;
