import React , {useState} from 'react'
import LessonData from '../../data/activity.json'
import { EllipsisHorizontalIcon ,FunnelIcon} from '@heroicons/react/24/outline';
function LessonView() {

  const [searchTerm, setSearchTerm] = useState('');
  const [statusGroup, setStatusGroup] = useState('all');
  const [ageGroup, setAgeGroup] = useState('all');
  const [selectedChild, setSelectedChild] = useState(null);
  const [activeTab, setActiveTab] = useState('emergency-contacts');

  const openDetails = (child) => {
    setSelectedChild(child);
  }

  const closeDetails = () => {
    setSelectedChild(null);
  }


  const filteredData= LessonData.filter((lesson) => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusGroup === 'all' || lesson.status.toLowerCase() === statusGroup.toLowerCase();
    const matchesAgeGroup = ageGroup === 'all' || lesson.type.toLowerCase() === ageGroup.toLowerCase();
    return matchesSearch && matchesStatus && matchesAgeGroup;
    });


  return (
    <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <div className="">
            <h1 className="text-2xl   text-gray-800">Activities and Events</h1>
            <p className="text-sm text-gray-500">Manage your Sunday School activities and special events</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row w-full justify-between  mt-3">

            <div className="flex items-center w-[60%] gap-4">
                <input type="text"  placeholder="Search lessons..." className="border w-full border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
           
            <div className="flex items-center  gap-4">
                <div className="flex gap-2 items-center  text-sm"> 
                    <FunnelIcon className='w-5 h-5 text-gray-500' /> Filter 
                </div>
               
                <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                     value={statusGroup}
                     onChange={(e) => setStatusGroup(e.target.value)}>
                    <option value="all">All Statuses</option>
                    <option value="completed">Completed</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="planning">Planning</option>
                </select>
           </div>

         <div className="flex items-center gap-4 ">
                <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}>

                    <option value="all">All Types</option>
                    <option value= "Special Event">Special Event</option>
                    <option value="Worship">Worship</option>
                    <option value="Cultural-Religious Event">Cultural Religious Event</option>
                    <option value="Educational Event">Educational Event</option>
                    <option value="Historical Commemoration">Historical Commemoration</option>
                    <option value="Children's Event">Children's Event</option>
                    <option value="Agricultural Festival">Agricultural Festival</option>
                    <option value="Spiritual Retreat">Spiritual Retreat</option>
                    <option value="Founders' Day">Founders' Day</option>
                </select>
        </div>

            
              
        </div>
        <div className="mt-4 w-full overflow-x-auto overflow-hidden rounded-lg border border-gray-200">
           <table className='min-w-full overflow-x-auto'>
             <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200  text-gray-700">Title</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Type</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Date</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Location</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Status</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Actions</th>
                </tr>
             </thead>
                <tbody>
                    {filteredData.map((lesson, index) => (
                    <tr key={index} className=" hover:bg-gray-50">
                        <td className="px-4 py-4 font-normal text-sm border-b border-gray-200 text-gray-700">{lesson.title}</td>
                        <td className="px-4 py-4 font-normal text-sm border-b border-gray-200 text-gray-700">{lesson.type}</td>
                        <td className="px-4 py-4 font-normal text-sm border-b border-gray-200 text-gray-700">{lesson.date}</td>
                        <td className="px-4 py-4 font-normal text-sm border-b border-gray-200 text-gray-700">{lesson.location}</td>
                        <td className={`px-2 py-4 font-normal text-sm border-b border-gray-200 text-gray-700`}>
                          <p className={`
                             ${ lesson.status === 'Completed'
                                ? 'text-green-600 bg-green-100 rounded-full inline-block text-sm  px-2 border-green-600 border  '
                                : lesson.status === 'Upcoming'
                                ? 'text-blue-600  bg-blue-100 rounded-full inline-block text-sm px-2 border-blue-600 border'
                                : lesson.status === 'Planning'
                                ? 'text-yellow-600  bg-yellow-100 rounded-full inline-block text-sm px-2 border-yellow-600 border'
                                : 'text-gray-600'}`}>{lesson.status}</p></td>
                        <td className="px-4 py-1 font-normal  border-b border-gray-200">
                           <button 
                                onClick={() => openDetails(lesson)}
                              className="text-gray-800 bg-gray-50 border-gray-200 border rounded-md px-4 py-1 font-light  text-sm hover:bg-gray-100">
                                <EllipsisHorizontalIcon className='w-5 h-5 inline-block' />
                              </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
           </table>
        </div>
            

      {/* {selectedChild && (
        <div className="fixed inset-0 bg-[#7c3bed0f] bg-opacity-50 flex items-center justify-center p-4 z-30">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto mt-10 mx-auto">
            <div className=" p-6">
              <h2 className="text-xl  text-gray-800">
                {selectedChild.title}'s
              </h2>
              <p className="text-gray-600">
                {selectedChild.teacher} • {selectedChild.age_group}
              </p>
              <p className="text-gray-600 text-sm"> {selectedChild.date} • {selectedChild.time}</p>
            </div>

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
         */}
      
    </div>
  )
}

export default LessonView
