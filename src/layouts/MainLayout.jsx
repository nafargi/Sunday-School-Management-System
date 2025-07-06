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
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
