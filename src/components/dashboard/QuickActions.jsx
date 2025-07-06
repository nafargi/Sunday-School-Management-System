// components/dashboard/QuickActions.jsx
import React from 'react';

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <div className="action-list">
        <label>
          <input type="checkbox" /> Add New Child
        </label>
        <label>
          <input type="checkbox" checked /> Mark Attendance
        </label>
        <label>
          <input type="checkbox" /> Plan Lesson
        </label>
        <label>
          <input type="checkbox" /> Schedule Activity
        </label>
      </div>
    </div>
  );
};

export default QuickActions;