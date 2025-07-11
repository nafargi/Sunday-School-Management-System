import React,{useState} from 'react'
import LessonData from '../../data/lesson.json'
import {ClockIcon,UserIcon,CalendarDateRangeIcon,BookOpenIcon} from '@heroicons/react/24/outline'


function CalancerView() {
const [selectedChild, setSelectedChild] = useState(null);
  const [activeTab, setActiveTab] = useState('emergency-contacts');

  const openDetails = (child) => {
    setSelectedChild(child);
  }

  const closeDetails = () => {
    setSelectedChild(null);
  }
const ageGroupColors = {
    "Little Lights": " border-t-10 border-yellow-300 text-yellow-500 ",
    "Bright Stars": " border-t-10 border-pink-400 text-pink-600",
    "Young Explorers": " border-t-10 border-cyan-400 text-cyan-600",
    "Faith Champions": "border-t-10 border-green-500 text-green-600",
    "Kingdom Leaders": " border-t-10 border-purple-500 text-purple-600",
    };

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
            {LessonData.map((lesson, index) => (
            <div key={index} className={`bg-white  rounded-xl shadow-lg shadow-[#00000009] p-4 ${ageGroupColors[lesson.age_group]}`}>
                <h3 className="text-lg  text-gray-900">{lesson.title}</h3>
                <p className="text-sm mb-2 border-b-1 pb-1">{lesson.age_group}</p>
                <p className="text-sm text-gray-500 mb-2 flex"> 
                    <CalendarDateRangeIcon className='w-5 h-5 mx-1'/> {lesson.date} • <ClockIcon className='w-5 h-5 mx-1' />{lesson.time}</p>
                 <p className="text-sm text-gray-500 mb-2 flex"> <UserIcon className='w-5 h-5 mr-1' /> Teacher: {lesson.teacher}</p>
                <p className="text-sm text-gray-700">{lesson.detail_view.overview.description} </p>
                <p className={`mt-2 px-2 py-1 rounded `}>
                {lesson.ageGroup}
                </p>

                <div className="border border-gray-200 p-2 rounded-lg hover:bg-gray-50 flex justify-center items-center">
                    <button className='flex text-gray-700 '
                    onClick={() => openDetails(lesson)}> <BookOpenIcon className='w-5 h-5 mr-1'/> View Details</button>
                </div>
            </div>
            ))}
        </div>

                {/* Detail Dialog */}
      {selectedChild && (
        <div className={`fixed inset-0 bg-[#7c3bed0f] bg-opacity-50 flex items-center justify-center  p-4 z-30 `}>
          <div className={`bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto mt-10 mx-auto ${ageGroupColors[selectedChild.age_group]}`}>
            {/* Dialog Header */}
            <div className=" p-6">
              <h2 className="text-xl  text-gray-800">
                {selectedChild.title}'s
              </h2>
              <p className="text-gray-600">
                {selectedChild.teacher} • {selectedChild.age_group}
              </p>
              <p className="text-gray-600 text-sm"> {selectedChild.date} • {selectedChild.time}</p>
            </div>

            {/* Tabs */}
            <div className=" px-6 rounded-lg">
              <nav className="flex justify-between rounded-lg bg-purple-50 p-1">
                <button
                  onClick={() => setActiveTab('emergency-contacts')}
                  className={`py-1  px-2 text-center border-b-2  text-sm ${activeTab === 'emergency-contacts' ? 'border-[#7C3BED] rounded-lg bg-[#7C3BED] text-[#ffffff]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('medical-information')}
                  className={`py-1 px-2 text-center border-b-2  text-sm ${activeTab === 'medical-information' ? 'border-[#7C3BED] rounded-lg bg-[#7C3BED] text-[#ffffff]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Materials
                </button>
                <button
                  onClick={() => setActiveTab('authorizations')}
                  className={`py-1 px-2 text-center border-b-2   text-sm ${activeTab === 'authorizations' ? 'border-[#7C3BED] rounded-lg bg-[#7C3BED] text-[#ffffff]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Objectives
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'emergency-contacts' && (
                <div>
                  <h3 className="text-lg  text-gray-900 ">Lesson Details</h3>
                  <p className="text-sm text-gray-500 mb-2">Basic information about this lesson</p>
        
                  <div className="grid grid-cols-2 w-full  gap-4 mb-6 border-b border-gray-200 pb-4">
                    <div>
                        <p className="  text-gray-900">Date</p>
                      <p className="text-sm text-gray-500">{selectedChild.detail_view.overview.basic_info.date}</p>
                    </div>
                    <div>
                      <p className="  text-gray-900">Teacher</p>
                      <p className="text-sm text-gray-500">{selectedChild.detail_view.overview.basic_info.teacher}</p>
                    </div>
                   
                    <div>
                      <p className="  text-gray-900">Time Duration</p>
                      <p className="text-sm text-gray-500">{selectedChild.detail_view.overview.basic_info.time}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="  text-gray-900">Age Group</p>
                      <p className="text-sm text-gray-500">{selectedChild.detail_view.overview.basic_info.age_group}</p>
                    </div>
                  </div>

                  <h3 className="text-lg  text-gray-900 mb-4">Description </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="text-gray-900">{selectedChild.detail_view.overview.description}</p>
                    </div>
                    
                  </div>
                </div>
              )}

              {activeTab === 'medical-information' && (
                <div>
                  <h3 className="text-lg  text-gray-900 mb-4">Required Material</h3>
                    <p className="text-sm text-gray-500 mb-2">Materials needed for this lesson</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                         <p className="text-gray-900">{selectedChild.detail_view.materials}</p>
                  </div>
                </div>
              )}

              {activeTab === 'authorizations' && (
                <div>
                  <h3 className="text-lg  text-gray-900 mb-4">Learning Objectives</h3>
                  <p className="text-sm text-gray-500 mb-2">Goals for this lesson</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                       <p className="text-gray-900">{selectedChild.detail_view.objectives}</p>
                  </div>

                  
                </div>
              )}
            </div>

            {/* Dialog Footer */}
            <div className="border-t border-gray-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={closeDetails}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-1  text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
        
    </div>

    
  )
}

export default CalancerView
