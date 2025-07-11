import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); 
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-gray-200 p-4 bg-[#ffffffd7] backdrop-blur-[10px] shadow-2xl shadow-[#0000000e] fixed top-0 w-full z-40 ">
        {/* Show hamburger only on mobile */}
        <Bars3Icon
          className="w-8 h-8 text-purple-700 cursor-pointer block md:hidden"
          onClick={toggleSidebar}
        />

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white px-4 py-2 w-48 md:w-64 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700">
            Search
          </button>
        </div>
      </div>

      {/* Render Sidebar conditionally */}
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </>
  );
}

export default Header;
