// layout/MainLayout.jsx
import React from 'react';
import Header from '../app/Header';
import Sidebar from '../app/Sidebar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="">
      <Sidebar />
      <div className="ml-64">

        <Header />
        <div className="p-1 mt-12">
            <div className="fixed w-[100%] left-0 top-[-100px]  z-[-1]">
                <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="churchPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                    <rect width="100" height="100" fill="#f8f7ff"/>
                    <path d="M50 15 L60 30 L40 30 Z" fill="#e9d5ff" fill-opacity="0.2"/>
                    <path d="M50 35 L50 50 M45 40 L55 40" stroke="#e9d5ff" stroke-width="2" stroke-opacity="0.2"/>
                    <circle cx="80" cy="80" r="5" fill="#e9d5ff" fill-opacity="0.2"/>
                    <circle cx="20" cy="20" r="5" fill="#e9d5ff" fill-opacity="0.2"/>
                    <circle cx="80" cy="20" r="3" fill="#e9d5ff" fill-opacity="0.2"/>
                    <circle cx="20" cy="80" r="3" fill="#e9d5ff" fill-opacity="0.2"/>
                    <circle cx="80" cy="80" r="5" fill="#e9d5ff" fill-opacity="0.2"/>

                    </pattern>
                </defs>
             <rect width="100" height="100" fill="url(#churchPattern)"/>
          </svg>
         </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
