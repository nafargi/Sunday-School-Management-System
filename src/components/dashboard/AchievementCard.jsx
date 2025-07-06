const AchievementCard = ({ title, description, date, color }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-100 flex items-start space-x-3">
      <div className={`w-6 h-6 rounded-full ${color}`}></div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
