import React from 'react'

const ParentalPermissions = ({path, title, description, permission, allowed,color,stroke }) => {
  return (
    <div className="p-4  bg-white rounded-lg  border border-gray-200 flex items-start space-x-3 mb-4 ">
      <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center`}>
        {path}
      </div>
      <div>
        <h3 className=" text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className={`text-xs text-gray-400 inline-block px-2 py-1 mt-1 rounded-2xl ${allowed}`}>{permission}</p>
      </div>

      
    </div>
    
  );
};

export default ParentalPermissions
