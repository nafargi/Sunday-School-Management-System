import UpcomingEventCard from './UpcomingEventCard';
import AchievementCard from './AchievementCard';

const OverviewTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Upcoming Events */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Upcoming Events</h2>
        <div className="space-y-4">
          <UpcomingEventCard
            title="Children’s Day Celebration"
            date="June 12, 2025 • 9:00 AM – 12:00 PM"
            description="Special activities and games for all age groups"
          />
          <UpcomingEventCard
            title="Bible Story Workshop"
            date="May 28, 2025 • 10:30 AM – 11:30 AM"
            description="Interactive storytelling for Young Explorers"
            tag="Young Explorers"
          />
          <UpcomingEventCard
            title="Parent-Teacher Meeting"
            date="May 25, 2025 • 6:00 PM – 7:30 PM"
            description="Discussing summer program and activities"
          />
        </div>
      </div>

      {/* Recent Achievements */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Recent Achievements</h2>
        <div className="space-y-4">
          <AchievementCard
            title="Bible Verse Memorization"
            description="Faith Champions group completed John 3:16"
            date="May 5, 2025"
            color="bg-yellow-400"
          />
          <AchievementCard
            title="Craft Competition"
            description="Young Explorers won first place"
            date="April 28, 2025"
            color="bg-green-400"
          />
          <AchievementCard
            title="Perfect Attendance"
            description="12 children achieved perfect attendance"
            date="April 2025"
            color="bg-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
