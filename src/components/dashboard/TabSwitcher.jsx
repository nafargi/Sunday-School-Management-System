const TabSwitcher = ({ activeTab, setActiveTab }) => {
  const tabs = ['Overview', 'Age Groups', 'Activities'];

  return (
    <div className="mt-4 flex space-x-4 bg-white inline-block rounded-xl ">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-1 text-sm ${
            activeTab === tab
              ? 'bg-[#7C3BED] text-white border-b-2 shadow-sm shadow-[#0000002c]  border-[#7C3BED] rounded-xl'
              : 'text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
