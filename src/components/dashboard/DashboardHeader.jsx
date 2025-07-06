const DashboardHeader = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Welcome to Sunday School Hub</h1>
      <p className="text-sm text-gray-500">Today is {today}</p>
    </div>
  );
};

export default DashboardHeader;
