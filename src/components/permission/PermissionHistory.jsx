import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

// Import all images for age1 (Little Lights)
import child1 from '../../assets/age1/1.jpg';
import child2 from '../../assets/age1/2.jpg';
import child3 from '../../assets/age1/3.jpg';
import child4 from '../../assets/age1/4.jpg';
import child5 from '../../assets/age1/5.jpg';
import child26 from '../../assets/age1/26.jpg';

// Import all images for age2 (Bright Stars)
import child6 from '../../assets/age2/6.jpg';
import child7 from '../../assets/age2/7.jpg';
import child8 from '../../assets/age2/8.jpg';
import child9 from '../../assets/age2/9.jpg';
import child10 from '../../assets/age2/10.jpg';
import child27 from '../../assets/age2/27.jpg';

// Import all images for age3 (Young Explorers)
import child11 from '../../assets/age3/11.jpg';
import child12 from '../../assets/age3/12.jpg';
import child13 from '../../assets/age3/13.jpg';
import child14 from '../../assets/age3/14.jpg';
import child15 from '../../assets/age3/15.jpg';
import child28 from '../../assets/age3/28.jpg';

// Import all images for age4 (Faith Champions)
import child16 from '../../assets/age4/16.jpg';
import child17 from '../../assets/age4/17.jpg';
import child18 from '../../assets/age4/18.jpg';
import child19 from '../../assets/age4/19.jpg';
import child20 from '../../assets/age4/20.jpg';
import child29 from '../../assets/age4/29.jpg';

// Import all images for age5 (Kingdom Leaders)
import child21 from '../../assets/age5/21.jpg';
import child22 from '../../assets/age5/22.jpg';
import child23 from '../../assets/age5/23.jpg';
import child24 from '../../assets/age5/24.jpg';
import child25 from '../../assets/age5/25.jpg';
import child30 from '../../assets/age5/30.jpg';

// Create the image mapping object
const imageMap = {
  'age1/1': child1,
  'age1/2': child2,
  'age1/3': child3,
  'age1/4': child4,
  'age1/5': child5,
  'age1/26': child26,
  
  'age2/6': child6,
  'age2/7': child7,
  'age2/8': child8,
  'age2/9': child9,
  'age2/10': child10,
  'age2/27': child27,
  
  'age3/11': child11,
  'age3/12': child12,
  'age3/13': child13,
  'age3/14': child14,
  'age3/15': child15,
  'age3/28': child28,
  
  'age4/16': child16,
  'age4/17': child17,
  'age4/18': child18,
  'age4/19': child19,
  'age4/20': child20,
  'age4/29': child29,
  
  'age5/21': child21,
  'age5/22': child22,
  'age5/23': child23,
  'age5/24': child24,
  'age5/25': child25,
  'age5/30': child30
};

const ChildPermissions = () => {
    
const data = [
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
  const [children, setChildren] = useState(
    data.map((child) => ({
      ...child,
      permissions: {
        photos: true,
        outings: true,
        snacks: true,
        socialMedia: false,
      },
    }))
  );
  const [selectedChild, setSelectedChild] = useState(null);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);

  const togglePermission = (id, type) => {
    setChildren((prev) =>
      prev.map((child) =>
        child.id === id
          ? {
              ...child,
              permissions: {
                ...child.permissions,
                [type]: !child.permissions[type],
              },
            }
          : child
      )
    );
  };

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
    const attendanceOptions = ['All Permissions', 'Photo', 'Snack','Social Media','Outing'];


  return (
    <div className="p-6 bg-white rounded-xl mt-6 ">
      <h2 className="text-2xl  ">Child Permissions</h2>

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
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full   ">
          <thead className="">
             <tr className="bg-gray-50 text-left  text-sm text-gray-900 ">
              <th className="p-3 font-normal">Photo</th>
              <th className="p-3 font-normal">Child</th>
              <th className="p-3 font-normal">Age Group</th>
              <th className="p-3 font-normal">Photos</th>
              <th className="p-3 font-normal">Outings</th>
              <th className="p-3 font-normal">Snacks</th>
              <th className="p-3 font-normal">Social Media</th>
              <th className="p-3 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
             {children.map((child) => {
              const imageKey = `${child.folder}/${child.photo}`;
              const imageSrc = imageMap[imageKey];
              
              return (
                <tr key={child.id} className="border-t border-gray-200 text-sm">
                  <td className="p-3">
                    {imageSrc ? (
                      <img 
                        src={imageSrc} 
                        alt={`${child.name}'s profile`}
                        className='w-10 h-10 rounded-full object-cover border border-gray-200'  
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
                        <span className="text-xs text-gray-500">No photo</span>
                      </div>
                    )}
                  </td>
                  <td className="p-3  text-gray-900">{child.name}</td>
                  <td className="p-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                      {child.ageGroup}
                    </span>
                  </td>
                  {["photos", "outings", "snacks", "socialMedia"].map((perm) => (
                    <td className="p-3" key={perm}>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={child.permissions[perm]}
                          onChange={() => togglePermission(child.id, perm)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </td>
                  ))}
                  <td className="p-3">
                    <button
                      className="px-3 py-1 text-sm rounded-md border border-gray-300 hover:bg-gray-50"
                      onClick={() => {
                        setSelectedChild(child);
                        setHistoryModalOpen(true);
                      }}
                    >
                      History
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* History Modal */}
      <Dialog open={historyModalOpen} onClose={() => setHistoryModalOpen(false)} className="fixed z-10 inset-0 overflow-y-auto bg-[#7c3bed0f]">
        <div className="flex items-center justify-center min-h-screen p-4">
          <Dialog.Panel className="bg-white rounded-xl p-6 max-w-xl w-full shadow-lg">
            <Dialog.Title className="text-lg mb-2">
              Permission History - {selectedChild?.name}
            </Dialog.Title>
            <p className="text-sm text-gray-500 mb-4">View the complete permission history for this child</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="p-2 font-normal text-left">Date</th>
                  <th className="p-2 font-normal text-left">Permission</th>
                  <th className="p-2 font-normal text-left">Action</th>
                  <th className="p-2 font-normal text-left">Requested By</th>
                  <th className="p-2 font-normal text-left">Approved By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">2025-05-15</td>
                  <td className="p-2">Photos</td>
                  <td className="p-2">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs">Granted</span>
                  </td>
                  <td className="p-2">Esayas Alemeu (Parent)</td>
                  <td className="p-2">Epherem Woldeab (Admin)</td>
                </tr>
                <tr>
                  <td className="p-2">2025-05-10</td>
                  <td className="p-2">Outings</td>
                  <td className="p-2">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs">Granted</span>
                  </td>
                  <td className="p-2">Abreham Molla(Parent)</td>
                  <td className="p-2">Bethel Baynesagn (Admin)</td>
                </tr>
                <tr>
                  <td className="p-2">2025-04-22</td>
                  <td className="p-2">Social Media</td>
                  <td className="p-2">
                    <span className="bg-gray-300 text-black px-2 py-1 rounded-full text-xs">Denied</span>
                  </td>
                  <td className="p-2">Tameru Abere (Parent)</td>
                  <td className="p-2">Hewan Muluneh (Director)</td>
                </tr>
                <tr>
                  <td className="p-2">2025-03-15</td>
                  <td className="p-2">Snacks</td>
                  <td className="p-2">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs">Granted</span>
                  </td>
                  <td className="p-2">Initial Registration</td>
                  <td className="p-2">System</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setHistoryModalOpen(false)}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
              >
                Close
              </button>
              <button className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700">
                Print History
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ChildPermissions;
