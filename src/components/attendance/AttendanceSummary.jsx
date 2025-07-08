const AttendanceSummary = ({ present, absent, rate }) => {
  return (
    <div className=" flex-col bg-white p-6 rounded-2xl shadow-xl shadow-[#00000009] flex items-start   w-full ">
      <h2 className="text-2xl  text-gray-800 ">Attendance Summary</h2>
      <p className="text-sm text-gray-600 mb-4">Current attendance statistics</p>
      <div className="flex justify-between  w-full text-gray-700 ">
        <div className="flex flex-col ">Present: <span className="text-green-600">{present}</span></div>
        <div className="flex flex-col ">Absent: <span className="text-red-600">{absent}</span></div>
        <div className="flex flex-col  ">Rate: <span className="text-blue-600 font-semibold">{rate}%</span></div>
      </div>
    </div>
  );
};

export default AttendanceSummary;
