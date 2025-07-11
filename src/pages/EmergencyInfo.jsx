import React from 'react';
import EmergencyHeader from '../components/emergency/EmergencyHeader'; 
import EmergencyList from '../components/emergency/EmergencyList'; 
import EmergencyData from '../components/emergency/EmergencyData';
const EmergencyInfo = () => {
  return (
    <div>
      <div className="md:p-6 p-2">
        <EmergencyHeader />
        <EmergencyData />
        <EmergencyList />
      </div>
    </div>
  );
};

export default EmergencyInfo;
