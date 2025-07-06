const UpcomingEventCard = ({ title, date, description, tag }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-100">
      <p className="text-sm text-purple-700 font-semibold">{date}</p>
      <h3 className="font-bold text-gray-800">{title}</h3>
      {tag && <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded">{tag}</span>}
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default UpcomingEventCard;
