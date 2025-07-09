import React from 'react'

function PermissionHeader() {
  return (
  <div className="flex justify-between items-center">
        <div className="">
            <h1 className="text-2xl  text-gray-800">Permissions Manager</h1>
            <p className="text-sm text-gray-500">Manage child permissions for various activities</p>
        </div>

        <div className="flex items-center gap-4">
            <button className=" bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                Permission Forms 
            </button>
             <button className="border p-bg border-gray-200 rounded-lg px-4 py-2 text-sm text-white  transition-colors">
                Export
            </button>
        </div>
      
    </div>
  )
}

export default PermissionHeader
