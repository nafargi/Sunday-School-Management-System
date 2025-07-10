import React , {useState} from 'react'
import LessonData from '../../data/lesson.json'
function LessonView() {

  const [searchTerm, setSearchTerm] = useState('');
  const [statusGroup, setStatusGroup] = useState('all');
  const [ageGroup, setAgeGroup] = useState('all');

  const filteredData= LessonData.filter((lesson) => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusGroup === 'all' || lesson.status.toLowerCase() === statusGroup.toLowerCase();
    const matchesAgeGroup = ageGroup === 'all' || lesson.age_group.toLowerCase() === ageGroup.toLowerCase();
    return matchesSearch && matchesStatus && matchesAgeGroup;
    });
    const ageGroupColors = {
    "Little Lights": "bg-yellow-100 border border-yellow-600 text-yellow-600",
    "Bright Stars": "bg-pink-100 border border-pink-600 text-pink-600",
    "Young Explorers": "bg-cyan-100 border border-cyan-600 text-cyan-600",
    "Faith Champions": "bg-green-100 border border-green-600 text-green-600",
    "Kingdom Leaders": "bg-purple-100 border border-purple-600 text-purple-600",
    };

  return (
    <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <div className="">
            <h1 className="text-2xl   text-gray-800">Lesson Plans</h1>
            <p className="text-sm text-gray-500">Manage your Sunday School curriculum and lesson plans</p>
        </div>
        <div className="flex w-full justify-between  mt-3">

            <div className="flex items-center w-[60%] gap-4">
                <input type="text"  placeholder="Search lessons..." className="border w-full border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
           
            <div className="flex items-center  gap-4">
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
                    <option value="all">All Group</option>
                    <option value="Little Lights">Little Lights</option>
                    <option value="Bright Stars">Bright Stars</option>
                    <option value="Young Explorers">Young Explorers</option>
                    <option value="Faith Champions">Faith Champions</option>
                    <option value="Kingdom Leaders">Kingdom Leaders</option>
                </select>
        </div>

            
              
        </div>
        <div className="mt-4 w-full overflow-hidden rounded-lg border border-gray-200">
           <table className='min-w-full overflow-x-auto'>
             <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200  text-gray-700">Title</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Teachers</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Age Group</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Date</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Time</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Location</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Status</th>
                  <th className="px-4 py-2 font-normal text-sm text-left border-b border-gray-200 text-gray-700">Actions</th>
                </tr>
             </thead>
                <tbody>
                    {filteredData.map((lesson, index) => (
                    <tr key={index} className=" hover:bg-gray-50">
                        <td className="px-4 py-4 font-normal text-sm border-b border-gray-200 text-gray-700">{lesson.title}</td>
                        <td className="px-4 py-4 font-normal text-sm border-b border-gray-200 text-gray-700">{lesson.teacher}</td>
                        <td className={`px-4 py-1 font-normal text-sm border-b border-gray-200 text-gray-700 `}>
                            <span className={`inline-block px-2  rounded-full text-sm  ${ageGroupColors[lesson.age_group] || 'bg-gray-100 border-gray-200 text-gray-800'}`}>
                                {lesson.age_group} </span>
                            </td> 
                        <td className="px-4 py-4 font-normal text-sm border-b border-gray-200 text-gray-700">{lesson.date}</td>
                        <td className="px-4 py-4 font-normal text-sm border-b border-gray-200 text-gray-700">{lesson.time}</td>
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
                           <button className="text-gray-800 bg-gray-50 border-gray-200 border rounded-md px-4 py-1 font-light  text-sm hover:bg-gray-100">View</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
           </table>
        </div>
            
        
      
    </div>
  )
}

export default LessonView
