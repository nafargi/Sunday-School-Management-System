const TabSwitcher = ({ activeTab, setActiveTab }) => {
  const tabs = ['Overview', 'Age Groups', 'Activities'];

  return (
    <div className="mt-4 flex space-x-4 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === tab
              ? 'text-[#7C3BED] border-b-2 border-[#7C3BED]'
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
