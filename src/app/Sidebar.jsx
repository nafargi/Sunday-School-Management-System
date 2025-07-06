import React from 'react';
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

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center pl-6 h-18.5 border-b border-gray-200">
       < AcademicCapIcon className="w-8 h-8 mr-2 p-1 bg-[#7C3BED] text-white rounded-full " /><h1 className="text-xl font-bold text-[#7C3BED]">SundayHub</h1>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-3">
          {/* Active Nav Item */}
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm font-medium text-white bg-[#7C3BED] rounded-lg group"
          >
            <HomeIcon className="w-5 h-5 mr-3 " />
            Dashboard
          </a>

          {/* Inactive Nav Items */}
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#7c3bed21] hover:text-[#7C3BED] group"
          >
            <UserIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
            Children
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#7c3bed21] hover:text-[#7C3BED] group"
          >
            <ClipboardDocumentListIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
            Attendance
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#7c3bed21] hover:text-[#7C3BED] hover:text-[#7C3BED] group"
          >
            
            <DocumentCheckIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
            Permissions
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#7c3bed21] hover:text-[#7C3BED] group"
          >
            <CalendarIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
            Activities
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#7c3bed21] hover:text-[#7C3BED] group"
          >
            <BookOpenIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
            Lessons
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#7c3bed21] hover:text-[#7C3BED] group"
          >
            < ExclamationCircleIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
            Emergency Info
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#7c3bed21] hover:text-[#7C3BED] group"
          >
            <ChartBarIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
            Reports
          </a>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#7c3bed21] hover:text-[#7C3BED] group"
            >
              <Cog6ToothIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
              Settings
            </a>
            
            {/* Notification Bell */}
            <div className="relative">
              <a
                href="#"
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#7c3bed21] hover:text-[#7C3BED] group"
              >
                <BellIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#7C3BED]" />
                Notifications
                <span className="absolute right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  3
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;