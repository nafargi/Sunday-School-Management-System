import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  UserIcon,
  CalendarIcon,
  ChartBarIcon,
  BookOpenIcon,
  ExclamationCircleIcon,
  Cog6ToothIcon,
  ClipboardDocumentListIcon,
  DocumentCheckIcon,
  BellIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const SidebarLink = ({ to, label, Icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-4 py-3 text-sm  rounded-lg group ${
        isActive
          ? 'text-white bg-[#7C3BED]'
          : 'text-gray-600 hover:bg-[#7c3bed21] hover:text-[#7C3BED]'
      }`
    }
  >
    <Icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
    {label}
  </NavLink>
);

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-2xl shadow-[#0000000e] z-50">
      {/* Logo Section */}
      <div className="flex items-center pl-6 h-18.5 border-b border-gray-200">
        <AcademicCapIcon className="w-8 h-8 mr-2 p-1 bg-[#7C3BED] text-white rounded-full" />
        <h1 className="text-2xl font-[500] text-[#7C3BED]">SundayHub</h1>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-3">
          <SidebarLink to="/dashboard" label="Dashboard" Icon={HomeIcon} />
          <SidebarLink to="/children" label="Children" Icon={UserIcon} />
          <SidebarLink to="/attendance" label="Attendance" Icon={ClipboardDocumentListIcon} />
          <SidebarLink to="/permissions" label="Permissions" Icon={DocumentCheckIcon} />
          <SidebarLink to="/activities" label="Activities" Icon={CalendarIcon} />
          <SidebarLink to="/lessons" label="Lessons" Icon={BookOpenIcon} />
          <SidebarLink to="/emergencyinfo" label="Emergency Info" Icon={ExclamationCircleIcon} />
          <SidebarLink to="/reports" label="Reports" Icon={ChartBarIcon} />
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 space-y-1">
          <SidebarLink to="/settings" label="Settings" Icon={Cog6ToothIcon} />

          <div className="relative">
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-lg group ${
                  isActive
                    ? 'text-white bg-[#7C3BED]'
                    : 'text-gray-600 hover:bg-[#7c3bed21] hover:text-[#7C3BED]'
                }`
              }
            >
              <BellIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
              Notifications
              <span className="absolute right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                3
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
