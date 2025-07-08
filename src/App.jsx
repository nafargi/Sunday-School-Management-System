import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Lessons from './pages/Lessons';
import Dashboard from './pages/Dashboard';
import Children from './pages/Children';
import EmergencyInfo from './pages/EmergencyInfo';
import Attendance from './pages/Attendance';
import Notifications from './pages/Notifications';
import Permissions from './pages/Permissions';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import UserProfile from './pages/UserProfile'
import Activities from './pages/Activities';
import ChildDetailView from '././components/children/ChildDetailView';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="children" element={<Children />} />
          <Route path="children/:id" element={<UserProfile/>} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="reports" element={<Reports />} />
          <Route path="emergencyinfo" element={<EmergencyInfo />} />
          <Route path="settings" element={<Settings/>} />
          <Route path="activities" element={<Activities/>} />
          <Route path="permissions" element={<Permissions/>} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </>
  )
}

export default App
