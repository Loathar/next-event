import EventList from "../components/events/event-list.js";
import { getFeaturedEvents } from "../components/helpers/api-util";
function HomePage(props) {
  // First time using outide file dummy data. calling the getFeaturedEvents function and storing in const.
  //Passing as props items to EventList component

  return (
    <div>
      {/* Passing the getFeaturedEvents as items props */}
      <EventList items={props.events} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return { props: { events: featuredEvents } };
}
export default HomePage;
