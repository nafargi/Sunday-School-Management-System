import { ChevronRightIcon } from '@heroicons/react/24/outline';

const GroupCard = ({ title, age, stats, bg, border }) => {
  return (
    <div className={`p-6 rounded-xl   shadow-lg shadow-[#00000009] ${bg} border-l-4 ${border}`}>
      <div className="flex  justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl  text-gray-800">{title}</h3>
          <p className="text-xs text-gray-500">Age Group Overview</p>
        </div>
        <div className=" border border-gray-500 rounded-full px-2">
         <p className="text-xs text-gray-900">{age}</p>

        </div>
      </div>
      <div className="mt-4 flex flex-col justify-between text-sm space-y-6">
        <div className="flex justify-between">
          <p className="text">Total children:</p>
          <p className="text-lg font-[500] text-gray-800">{stats.total}</p>
        </div>
        <div className="flex justify-between">
          <p className=" ">Present today:</p>
          <p>{stats.present}</p>
        </div>
        <div className="flex justify-between">
          <p className="text- ">Absent today:</p>
          <p>{stats.absent}</p>
        </div>
      </div>
     <div className="border rounded-lg bg-white border-gray-200 p-1.5 flex items-center justify-center mt-4">
              <h3 className=" text-gray-800">View all Event </h3>
              <ChevronRightIcon className='w-4 font-semibold' />
           </div>
    </div>
  );
};

export default GroupCard;
