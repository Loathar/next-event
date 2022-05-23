import { getFeaturedEvents } from "../dummy-data.js";
function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Hello Next!</h1>
      {/* {featuredEvents} */}
    </div>
  );
}

export default HomePage;
