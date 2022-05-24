import { getFeaturedEvents } from "../dummy-data.js";
import EventList from "../components/events/event-list.js";
function HomePage() {
  // First time using outide file. dummy data
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      {/* Passing the getFeaturedEvents as items props */}
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
