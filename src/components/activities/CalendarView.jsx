import React,{useState} from 'react'
import LessonData from '../../data/activity.json'
import {MapPinIcon,UserIcon,CalendarDateRangeIcon,BookOpenIcon} from '@heroicons/react/24/outline'


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
        "Special Event": " border-t-10 border-yellow-300 text-yellow-500 ",
        "Worship": " border-t-10 border-pink-400 text-pink-600",
        "Educational Event": " border-t-10 border-cyan-400 text-cyan-600",
        "Cultural-Religious Event": "border-t-10 border-green-500 text-green-600",
        "Historical Commemoration": " border-t-10 border-purple-500 text-purple-600",
        "Children's Event": " border-t-10 border-indigo-300 text-indigo-500 ",
        "Agricultural Festival": " border-t-10 border-fuchsia-300 text-fuchsia-500 ",
        "Musical Event": " border-t-10 border-red-300 text-red-500 ",
        "Spiritual Retreat": " border-t-10 border-amber-300 text-amber-500 ",
        "Founders' Day": " border-t-10 border-emerald-300 text-emerald-500 ",

    };

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4  ">
            {LessonData.map((lesson, index) => (
            <div key={index} className={`bg-white  rounded-xl shadow-lg shadow-[#00000009] p-4 ${ageGroupColors[lesson.type]} `}>
                <h3 className="text-lg  text-gray-900">{lesson.title}</h3>
                <p className="text-sm border-b-1 border-gray-300 mb-2 pb-1">{lesson.type}</p>
                <p className="text-sm text-gray-500 mb-2 flex"> 
                    <CalendarDateRangeIcon className='w-5 h-5 mx-1'/> {lesson.date} </p>
                 <p className="text-sm text-gray-500 mb-2 flex"> <MapPinIcon className='w-5 h-5 mr-1' /> {lesson.location}</p>
                <p className="text-sm text-gray-700">{lesson.details.description} </p>
                {/* <p className={`mt-2 px-2 py-1 rounded `}>
                {lesson.}
                </p> */}

                <div className="border border-gray-200 p-2 rounded-lg hover:bg-gray-50 flex justify-center items-center mt-3">
                    <button className='flex text-gray-700 '
                    onClick={() => openDetails(lesson)}> <BookOpenIcon className='w-5 h-5 mr-1'/> View Details</button>
                </div>
            </div>
            ))}
        </div>

      
    </div>

    
  )
}

export default CalancerView
