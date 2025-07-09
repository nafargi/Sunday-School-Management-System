import ListAttendance from '../components/attendance/AttendanceList';
const Attendance = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl  ">Attendance Tracker</h1>
        <p className="text-gray-500 mb-6">Track and manage Sunday School attendance</p>
        <ListAttendance />
      </div>
    </div>
  );
};

export default Attendance;
