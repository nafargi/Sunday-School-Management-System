import {CalendarIcon} from '@heroicons/react/24/outline';
const UpcomingEventCard = ({ title, date, description, tag, }) => {
  return (
    <div className="p-4 bg-white rounded-lg  border border-gray-200 flex items-center space-x-3">
       <div className={`w-8 h-8 rounded-full light-p-bg flex items-center justify-center`}>
        <CalendarIcon className='p-text w-5 ' />
      </div>
      <div>
        <div className="flex justify-between items-center w-full ">
            <h3 className=" text-gray-800">{title}</h3>
            {tag && <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded">{tag}</span>}

        </div>
        <p className="text-gray-500 text-sm ">{date}</p>

        <p className="text-sm  mt-1">{description}</p>
      </div>
    
    </div>
  );
};

export default UpcomingEventCard;
