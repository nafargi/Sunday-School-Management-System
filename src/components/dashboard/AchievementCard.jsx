const AchievementCard = ({ title, description, date, color,stroke }) => {
  return (
    <div className="p-4  bg-white rounded-lg  border border-gray-200 flex items-start space-x-3 mb-4 ">
      <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={`${stroke}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award h-5 w-5 text-green-600"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>

      </div>
      <div>
        <h3 className=" text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>

      
    </div>
    
  );
};

export default AchievementCard;
