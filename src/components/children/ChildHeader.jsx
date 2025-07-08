const DashboardHeader = () => {

  return (
    <div className="flex justify-between items-center">
        <div className="">
            <h1 className="text-2xl  text-gray-800">Children</h1>
            <p className="text-sm text-gray-500">Manage your Sunday School children</p>
        </div>

        <div className="flex items-center gap-4">
            <button className=" bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                Export
            </button>
             <button className="border p-bg border-gray-200 rounded-lg px-4 py-2 text-sm text-white  transition-colors">
                Add New Child
            </button>
        </div>
      
    </div>
  );
};

export default DashboardHeader;
