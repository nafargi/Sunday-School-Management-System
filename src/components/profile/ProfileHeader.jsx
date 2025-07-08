const ProfileHeader = () => {

  return (
    <div className="flex justify-between items-center mb-6">
        <div className="">
            <h1 className="text-2xl  text-gray-800">Children</h1>
            <p className="text-sm text-gray-500">Manage your Sunday School children</p>
        </div>

        <div className="flex items-center gap-4">
             <button className="border p-bg border-gray-200 rounded-lg px-4 py-2 text-sm text-white  transition-colors">
                Edite Profile
            </button>
        </div>
      
    </div>
  );
};

export default ProfileHeader;
