import React, { useState, useEffect } from 'react';
import childrenData from './../../data/permission.json';

const PermissionHistory = () => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    if (Array.isArray(childrenData)) {
      setChildren(childrenData);
    } else {
      console.error("Data is not an array:", childrenData);
      setChildren([]);
    }
  }, []);

  // Flatten all permission history entries from all children
  const allPermissionHistory = children.flatMap(child => 
    child.permission_history?.map(entry => ({
      ...entry,
      childName: child.name,
      childPhoto: child.photo
    })) || []
  );

  return (
    <div className="container mx-auto p-4 bg-white mt-6 rounded-lg">
      <h1 className="text-2xl mb-6">Permission Change History</h1>

      <div className="border overflow-x-auto border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className='border border-gray-200 bg-gray-50 text-sm'>
            <tr>
              <th className="py-2 px-4 font-normal">Photo</th>
              <th className="py-2 px-4 font-normal text-left">Name</th>
              <th className="py-2 px-4 font-normal text-left">Permission</th>
              <th className="py-2 px-4 font-normal text-left">Date</th>
              <th className="py-2 px-4 font-normal text-left">Action</th>
              <th className="py-2 px-4 font-normal text-left">Requested By</th>
              <th className="py-2 px-4 font-normal text-left">Approved By</th>
            </tr>
          </thead>
          <tbody>
            {allPermissionHistory.map((entry, index) => (
              <tr key={`${entry.date}-${index}`}>
                <td className="py-2 px-4 flex justify-center border-b border-gray-200">
                  <img 
                    src={entry.childPhoto} 
                    alt="profile" 
                    className="rounded-full w-10 h-10"
                    onError={(e) => {
                      e.target.src = '/assets/default-profile.jpg';
                    }}
                  />
                </td>
                <td className="py-2 px-4 text-sm border-b border-gray-200">{entry.childName}</td>
                <td className="py-2 px-4 text-sm border-b border-gray-200 capitalize">{entry.permission.replace('_', ' ')}</td>
                <td className="py-2 px-4 text-sm border-b border-gray-200">{entry.date}</td>
                <td className="py-2 px-4 text-sm border-b border-gray-200 capitalize">{entry.action}</td>
                <td className="py-2 px-4 text-sm border-b border-gray-200">{entry.requested_by}</td>
                <td className="py-2 px-4 text-sm border-b border-gray-200">{entry.approved_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionHistory;