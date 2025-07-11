const TabSwitcher = ({ activeTab, setActiveTab }) => {
  const tabs = ['Basic Info','Sunday School', 'Permissions','Interests'];

  return (
    <div className="mt-4 px-6 mx-6 py-1  space-x-4 bg-purple-50 inline-block rounded-xl ">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-1 text-sm ${
            activeTab === tab
              ? 'bg-[#ffffff]  shadow-sm shadow-[#00000016]  rounded-xl'
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
