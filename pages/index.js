import { getFeaturedEvents } from "../dummy-data.js";
import EventList from "../components/events/event-list.js";
function HomePage() {
  // First time using outide file dummy data. calling the getFeaturedEvents function and storing in const.
  //Passing as props items to EventList component

  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      {/* Passing the getFeaturedEvents as items props */}
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
