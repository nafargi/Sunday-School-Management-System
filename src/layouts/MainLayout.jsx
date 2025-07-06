import React from 'react'
import Header from '../app/Header'
import Sidebar from '../app/Sidebar'

function MainLayout() {
  return (
    <>
      <div className="">
        <Sidebar />
        <div className="ml-64">
            <Header />
          {/* Main content goes here */}
          <h1 className="text-2xl font-bold text-gray-800">Welcome to SundayHub</h1>
          <p className="mt-2 text-gray-600">Your hub for Sunday school management.</p>
        </div>
      </div>
    </>
  )
}

export default MainLayout
