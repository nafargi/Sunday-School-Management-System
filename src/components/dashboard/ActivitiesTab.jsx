import React from 'react';
import UpcomingEventCard from './UpcomingEventCard';

const ActivitiesTab = () => {
  const events = [
    {
      title: 'Children’s Day Celebration',
      date: 'June 12, 2025 • 9:00 AM – 12:00 PM',
      description: 'Special activities and games for all age groups',
    },
    {
      title: 'Bible Story Workshop',
      date: 'May 28, 2025 • 10:30 AM – 11:30 AM',
      description: 'Interactive storytelling for Young Explorers',
      tag: 'Young Explorers',
    },
    {
      title: 'Parent-Teacher Meeting',
      date: 'May 25, 2025 • 6:00 PM – 7:30 PM',
      description: 'Discussing summer program and activities',
    },
  ];

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Upcoming Events</h2>
      {events.map((event, idx) => (
        <UpcomingEventCard key={idx} {...event} />
      ))}

      <div className="mt-4">
        <a
          href="/view-all-events"
          className="inline-block text-[#7C3BED] text-sm font-medium hover:underline"
        >
          View All Events →
        </a>
      </div>
    </div>
  );
};

export default ActivitiesTab;
