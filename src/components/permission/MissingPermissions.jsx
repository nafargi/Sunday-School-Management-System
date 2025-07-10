// src/components/ChildrenTable.js
import React, { useState, useEffect } from 'react';
import childrenData from './../../data/childern.json'; // Adjust the path as necessary

const ChildrenTable = () => {
  const [children, setChildren] = useState([]);
  const [filter, setFilter] = useState('all');
  

useEffect(() => {
  if (Array.isArray(childrenData)) {
    setChildren(childrenData);
  } else {
    console.error("Data is not an array:", childrenData);
    setChildren([]); // Fallback to empty array
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
      <h1 className="text-2xl  mb-6">Ethiopian Children Management</h1>
      
      <div className="mb-4">
        <label className="mr-2">Filter by missing permission:</label>
        <select 
          onChange={(e) => setFilter(e.target.value)}
          className="p-2  rounded"
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
        <thead className='border border-gray-200 '>
          <tr>
            <th className="py-2 px-4  ">Photo</th>
            <th className="py-2 px-4 ">Name</th>
            <th className="py-2 px-4 ">Age</th>
            <th className="py-2 px-4 ">Group</th>
            <th className="py-2 px-4 ">Missing Permissions</th>
            <th className="py-2 px-4 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredChildren.map(child => (
            <tr key={child.id}>
              <td className="py-2 px-4 flex justify-center border-b border-gray-200">
                <img src={child.photo} alt="profile image"
                className='rounded-full w-10 h-10' /></td>
              <td className="py-2 px-4  border-b border-gray-200">{child.name}</td>
              <td className="py-2 px-4  border-b border-gray-200">{child.age}</td>
              <td className="py-2 px-4  border-b border-gray-200 ">{child.age_group}</td>
              <td className="py-2 px-4  border-b border-gray-200">
                {getMissingPermissions(child).join(', ') || 'None'}
              </td>
              <td className="py-2 px-4  border-b border-gray-200">
                <button 
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  onClick={() => console.log(`Send reminder for ${child.name}`)}
                >
                  Remind
                </button>
                <button 
                  className="bg-green-500 text-white px-3 py-1 rounded"
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