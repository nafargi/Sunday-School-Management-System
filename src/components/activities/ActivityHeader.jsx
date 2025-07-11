import React from 'react'

function LessonHeader() {
  return (
    <div className="flex flex-col md:flex-row gap-4  md:justify-between md:items-center">
        <div className="">
            <h1 className="text-2xl  text-gray-800">Activities</h1>
            <p className="text-sm text-gray-500">Plan and manage Sunday School activities and events</p>
        </div>

        <div className="flex items-center gap-4">
            <button className=" bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                Export
            </button>
             <button className="border p-bg border-gray-200 rounded-lg px-4 py-2 text-sm text-white  transition-colors">
                + New Activity
            </button>
        </div>
      
    </div>
  )
}

export default LessonHeader
