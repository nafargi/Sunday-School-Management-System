// src/components/ChildrenTable.js
import React, { useState, useEffect } from 'react';
import childrenData from './../../data/childern.json'; // Adjust the path as necessary

const ChildrenTable = () => {
const [children, setChildren] = useState([]);
const [filter, setFilter] = useState('all');
  
  const ageGroupColors = {
    "Little Lights": "bg-yellow-100 border border-yellow-600 text-yellow-600",
    "Bright Stars": "bg-pink-100 border border-pink-600 text-pink-600",
    "Young Explorers": "bg-cyan-100 border border-cyan-600 text-cyan-600",
    "Faith Champions": "bg-green-100 border border-green-600 text-green-600",
    "Kingdom Leaders": "bg-purple-100 border border-purple-600 text-purple-600",
};

useEffect(() => {
  if (Array.isArray(childrenData)) {
    setChildren(childrenData);
  } else {
    console.error("Data is not an array:", childrenData);
    setChildren([]);
  }
}, []);

  const getMissingPermissions = (child) => {
    return Object.entries(child.permissions)
      .filter(([_, value]) => !value)
      .map(([key]) => key.replace('_', ' '));
  };

  const filteredChildren = filter === 'all' 
    ? children 
    : children.filter(child => !child.permissions[filter]);

  return (
    <div className="container mx-auto p-4 bg-white  mt-6 rounded-lg ">
      <h1 className="text-2xl  mb-6">Missing Permissions</h1>
      
      <div className="mb-4">
        <label className="mr-2 font-normal text-gray-700">Filter :</label>
        <select 
          onChange={(e) => setFilter(e.target.value)}
          className="p-2  rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">All Children</option>
          <option value="social_media">Social Media</option>
          <option value="photos">Photos</option>
          <option value="outings">Outings</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>

      <div className="border border-gray-200 rounded-lg  overflow-hidden ">
        <table className="min-w-full bg-white ">
        <thead className='border border-gray-200  bg-gray-50 text-sm'>
          <tr>
            <th className="py-2 px-4 font-normal ">Photo</th>
            <th className="py-2 px-4 font-normal text-left  ">Name</th>
            <th className="py-2 px-4 font-normal text-left ">Age</th>
            <th className="py-2 px-4 font-normal text-left ">Group</th>
            <th className="py-2 px-4 font-normal text-left ">Missing Permissions</th>
            <th className="py-2 px-4 font-normal text-left ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredChildren.map(child => (
            <tr key={child.id}>
              <td className="py-2 px-4 flex justify-center border-b border-gray-200">
                <img src={child.photo} alt="profile image"
                className='rounded-full w-10 h-10' /></td>
              <td className="py-2 px-4 text-sm  border-b border-gray-200">{child.name}</td>
              <td className="py-2 px-4 text-sm   border-b border-gray-200">{child.age}</td>
                <td className='border-b border-gray-200 px-4'>
                    <p   className={`py-1 px-2 text-sm  rounded-full inline-block ${
                    ageGroupColors[child.age_group] || ""
                    }`}>{child.age_group}</p>
                
                </td>
                 <td className="py-2 px-4  text-sm  border-b border-gray-200">
                    <p className="bg-red-100 text-red-500 inline-block border border-red-500 px-2 py-1 rounded-full text-xs">
                        {getMissingPermissions(child) || 'None'}
                    </p>
                
              </td>
              <td className="py-2 px-4  border-b border-gray-200">
                <button 
                  className="bg-blue-200 border border-blue-500 rounded-full text-blue-500  text-sm font-normal px-3 py-1 mr-2"
                  onClick={() => console.log(`Send reminder for ${child.name}`)}
                >
                  Remind
                </button>
                <button 
                  className="bg-green-200 border border-green-500 text-sm font-normal rounded-full text-green-500 px-3 py-1 "
                  onClick={() => console.log(`Print form for ${child.name}`)}
                >
                  Print
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      
    </div>
  );
};

export default ChildrenTable;