const GroupCard = ({ title, age, stats, bg, border }) => {
  return (
    <div className={`p-4 rounded-xl shadow-sm ${bg} border ${border}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-md font-bold text-gray-800">{title}</h3>
          <p className="text-xs text-gray-500">{age}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Total children:</p>
          <p className="text-lg font-bold text-gray-800">{stats.total}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm">
        <div>
          <p className="text-green-600 font-medium">Present today:</p>
          <p>{stats.present}</p>
        </div>
        <div>
          <p className="text-red-500 font-medium">Absent today:</p>
          <p>{stats.absent}</p>
        </div>
      </div>
      <button className="mt-4 text-sm font-medium text-[#7C3BED] hover:underline">
        View Children →
      </button>
    </div>
  );
};

export default GroupCard;
