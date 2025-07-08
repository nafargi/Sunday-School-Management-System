import React from 'react'
import Attendance from './sundaySchool/Attendance'
import ClassInformation from './sundaySchool/ClassInformation'
import RecentAttendance from './sundaySchool/RecentAttendance'
function SundaySchool() {
  return (
    <div>
        <ClassInformation />
        <Attendance />
        <RecentAttendance />
    </div>
  )
}

export default SundaySchool
