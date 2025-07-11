import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import AttendanceSummary from './AttendanceSummary'
import AttendanceDate from './AttendanceDate'
import ListInfo from './ListInfo'

function ListAttendance() {
const navigate = useNavigate();

const childrenData = [
  {
    id: 1,
    photo: "1",
    folder: 'age1',
    name: "Yohannes Tesfaye",
    age: 4,
    ageGroup: "Little Lights",
    attendance: "Present",
    emergencyContact: "0111223344 (Father)"
  },
  {
    id: 2,
    photo: "2",
    folder: 'age1',
    name: "Amina Mohammed",
    age: 5,
    ageGroup: "Little Lights",
    attendance: "Present",
    emergencyContact: "0912345678 (Mother)"
  },
  {
    id: 3,
    photo: "3",
    folder: 'age1',
    name: "Dawit Assefa",
    age: 4,
    ageGroup: "Little Lights",
    attendance: "Absent",
    emergencyContact: "0922113344 (Aunt)"
  },
  {
    id: 4,
    photo: "4",
    folder: 'age1',
    name: "Selamawit Abebe",
    age: 5,
    ageGroup: "Little Lights",
    attendance: "Present",
    emergencyContact: "0933445566 (Mother)"
  },
  {
    id: 5,
    photo: "5",
    folder: 'age1',
    name: "Hagos Tekle",
    age: 6,
    ageGroup: "Little Lights",
    attendance: "Present",
    emergencyContact: "0944556677 (Father)"
  },
  {
    id: 6,
    photo: "6",
     folder: 'age2',
    name: "Fasika Melaku",
    age: 7,
    ageGroup: "Bright Stars",
    attendance: "Present",
    emergencyContact: "0955667788 (Mother)"
  },
  {
    id: 7,
    photo: "7",
    folder: 'age2',
    name: "Tewodros Kebede",
    age: 8,
    ageGroup: "Bright Stars",
    attendance: "Absent",
    emergencyContact: "0966778899 (Father)"
  },
  {
    id: 8,
    photo: "8",
    folder: 'age2',
    name: "Birtukan Hailu",
    age: 7,
    ageGroup: "Bright Stars",
    attendance: "Present",
    emergencyContact: "0977889900 (Grandmother)"
  },
  {
    id: 9,
    photo: "9",
    folder: 'age2',
    name: "Abdi Ali",
    age: 8,
    ageGroup: "Bright Stars",
    attendance: "Present",
    emergencyContact: "0988990011 (Uncle)"
  },
  {
    id: 10,
    folder: 'age2',
    photo: "10",
    name: "Rahel Solomon",
    age: 9,
    ageGroup: "Bright Stars",
    attendance: "Present",
    emergencyContact: "0999001122 (Mother)"
  },
  {
    id: 11,
    photo: "11",
    folder: 'age3',
    name: "Elias Getachew",
    age: 10,
    ageGroup: "Young Explorers",
    attendance: "Absent",
    emergencyContact: "0100112233 (Father)"
  },
  {
    id: 12,
    photo: "12",
    folder: 'age3',
    name: "Mekdes Girma",
    age: 9,
    ageGroup: "Young Explorers",
    attendance: "Present",
    emergencyContact: "0111223344 (Mother)"
  },
  {
    id: 13,
    photo: "13",
    folder: 'age3',
    name: "Kebede Worku",
    age: 10,
    ageGroup: "Young Explorers",
    attendance: "Present",
    emergencyContact: "0122334455 (Father)"
  },
  {
    id: 14,
    photo: "14",
    folder: 'age3',
    name: "Zewditu Ahmed",
    age: 11,
    ageGroup: "Young Explorers",
    attendance: "Present",
    emergencyContact: "0133445566 (Aunt)"
  },
  {
    id: 15,
    photo: "15",
    folder: 'age3',
    name: "Tariku Bekele",
    age: 11,
    ageGroup: "Young Explorers",
    attendance: "Absent",
    emergencyContact: "0144556677 (Father)"
  },
  {
    id: 16,
    photo: "16",
    folder: 'age4',
    name: "Hana Mohammed",
    age: 12,
    ageGroup: "Faith Champions",
    attendance: "Present",
    emergencyContact: "0155667788 (Mother)"
  },
  {
    id: 17,
    photo: "17",
    folder: 'age4',
    name: "Samuel Tadesse",
    age: 13,
    ageGroup: "Faith Champions",
    attendance: "Present",
    emergencyContact: "0166778899 (Father)"
  },
  {
    id: 18,
    photo: "18",
    folder: 'age4',
    name: "Frehiwot Asrat",
    age: 12,
    ageGroup: "Faith Champions",
    attendance: "Absent",
    emergencyContact: "0177889900 (Mother)"
  },
  {
    id: 19,
    photo: "19",
    folder: 'age4',
    name: "Ashenafi Demissie",
    age: 13,
    ageGroup: "Faith Champions",
    attendance: "Present",
    emergencyContact: "0188990011 (Father)"
  },
  {
    id: 20,
    photo: "20",
    folder: 'age4',
    name: "Meseret Alemu",
    age: 14,
    ageGroup: "Faith Champions",
    attendance: "Present",
    emergencyContact: "0199001122 (Mother)"
  },
  {
    id: 21,
    photo: "21",
    folder: 'age5',
    name: "Bereket Yohannes",
    age: 15,
    ageGroup: "Kingdom Leaders",
    attendance: "Present",
    emergencyContact: "0200112233 (Father)"
  },
  {
    id: 22,
    photo: "22",
    folder: 'age5',
    name: "Meron Abate",
    age: 16,
    ageGroup: "Kingdom Leaders",
    attendance: "Absent",
    emergencyContact: "0211223344 (Mother)"
  },
  {
    id: 23,
    photo: "23",
    folder: 'age5',
    name: "Temesgen Assefa",
    age: 15,
    ageGroup: "Kingdom Leaders",
    attendance: "Present",
    emergencyContact: "0222334455 (Father)"
  },
  {
    id: 24,
    photo: "24",
    folder: 'age5',
    name: "Saron Mekonnen",
    age: 16,
    ageGroup: "Kingdom Leaders",
    attendance: "Present",
    emergencyContact: "0233445566 (Mother)"
  },
  {
    id: 25,
    photo: "25",
    folder: 'age5',
    name: "Nahom Girma",
    age: 16,
    ageGroup: "Kingdom Leaders",
    attendance: "Present",
    emergencyContact: "0244556677 (Uncle)"
  },
  {
    id: 26,
    photo: "26",
    folder: 'age1',
    name: "Kidist Solomon",
    age: 5,
    ageGroup: "Little Lights",
    attendance: "Absent",
    emergencyContact: "0255667788 (Mother)"
  },
  {
    id: 27,
    photo: "27",
    folder: 'age2',
    name: "Bilen Asfaw",
    age: 8,
    ageGroup: "Bright Stars",
    attendance: "Present",
    emergencyContact: "0266778899 (Father)"
  },
  {
    id: 28,
    photo: "28",
    folder: 'age3',
    name: "Yared Mulatu",
    age: 10,
    ageGroup: "Young Explorers",
    attendance: "Present",
    emergencyContact: "0277889900 (Mother)"
  },
  {
    id: 29,
    photo: "29",
    folder: 'age4',
    name: "Marta Daniel",
    age: 13,
    ageGroup: "Faith Champions",
    attendance: "Absent",
    emergencyContact: "0288990011 (Aunt)"
  },
  {
    id: 30,
    photo: "30",
    folder: 'age5',
    name: "Eyob Teshome",
    age: 15,
    ageGroup: "Kingdom Leaders",
    attendance: "Present",
    emergencyContact: "0299001122 (Father)"
  }
];
   const [children, setChildren] = useState(childrenData);

// State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [selectedAttendance, setSelectedAttendance] = useState('All');

  // Filter children data based on search and filters
    const filteredChildren = children.filter(child =>{
    const matchesSearch = child.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAgeGroup = selectedAgeGroup === 'All' || child.ageGroup === selectedAgeGroup;
    const matchesAttendance = selectedAttendance === 'All' || child.attendance === selectedAttendance;
    return matchesSearch && matchesAgeGroup && matchesAttendance;
  });

  // Get unique age groups for filter dropdown
  const attendanceOptions = ['All', 'Present', 'Absent'];
  

  const toggleAttendance = (id) => {
    const updated = children.map(child =>
      child.id === id
        ? { ...child, attendance: child.attendance === "Present" ? "Absent" : "Present" }
        : child
    );
    setChildren(updated);
  };

  const presentCount = children.filter(c => c.attendance === "Present").length;
  const absentCount = children.length - presentCount;
  const rate = Math.round((presentCount / children.length) * 100);

  return (
  <div className="mt-6 flex flex-col space-y-4">
    <div className="flex gap-4 flex-col md:flex-row items-center justify-between ">
        <AttendanceDate />
        <AttendanceSummary
                present={presentCount}
                absent={absentCount}
                rate={rate}
              />
          
    </div>

     <div className="bg-white p-6 rounded-2xl shadow-xl shadow-[#00000009] ">
              <div className="flex  items-center justify-between">
                <div className="">
                        <h2 className="text-2xl">Mark Attendance</h2>
                        <p className='text-sm text-gray-500 mb-6'>Click on a child to toggle their attendance status</p>
                </div>
                  <button className="border border-gray-200 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download mr-2 h-4 w-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                    Export Report
                  </button>
              </div>
            
              
              {/* Search and Filter Bar */}
              <div className="grid  grid-cols-1 md:grid-cols-12 gap-4 mb-2">
                {/* Search Input - Full width on mobile, 6 cols on desktop */}
                <div className='md:col-span-10'>
                  <label htmlFor="search" className="block text-gray-700 mb-1">
                    Search Children
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search by name..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

              

                {/* Attendance Filter - Full width on mobile, 3 cols on desktop */}
                <div className='md:col-span-2'>
                  <label htmlFor="attendance" className="block text-gray-700 mb-1">
                    Attendance
                  </label>
                  <select
                    id="attendance"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={selectedAttendance}
                    onChange={(e) => setSelectedAttendance(e.target.value)}
                  >
                    {attendanceOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Table Header - Hidden on mobile */}
              <div className="grid grid-cols-12 gap-2 p-3 mb-0 rounded-t-lg border text-gray-500 border-gray-200 text-sm">
                <div className="col-span-0">#</div>
                <div className="col-span-2 ">Photo</div>
                <div className="col-span-4 ">Name</div>
                <div className="col-span-3  ">Age Group</div>
                <div className="col-span-2 ">Status</div>
              </div>
              
              {/* Children List */}
              <div className="divide-y divide-gray-200">
                {filteredChildren.length > 0 ? (
                  filteredChildren.map((child) => (
                    <ListInfo
                      key={child.id}
                      {...child}
                      onToggleAttendance={() => toggleAttendance(child.id)}

                    />
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No children match your search criteria
                  </div>
                )}
              </div>
     </div>

  </div>
  )
}

export default ListAttendance
