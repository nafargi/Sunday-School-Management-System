import React from 'react';
import EmergencyHeader from '../components/emergency/EmergencyHeader'; 
import EmergencyList from '../components/emergency/EmergencyList'; // Adjust the path as necessary
const EmergencyInfo = () => {
  return (
    <div>
      <div className="p-6">
        <EmergencyHeader />
        <EmergencyList />
      </div>
    </div>
  );
};

export default EmergencyInfo;
