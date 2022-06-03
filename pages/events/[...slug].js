import { useRouter } from "next/router";
import { getFilteredEvents } from "../../components/helpers/api-util";
import EventList from "../../components/events/event-list";
import { Fragment } from "react/cjs/react.production.min";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage(props) {
  const router = useRouter();
  const filteredData = router.query.slug;
  // console.log(filteredData);
  // if (!filteredData) {
  //   return <p className="center">Loading...</p>;
  // }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  // // Converting to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  Check if numYear is a numner
  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Invalid filter, please adjust your values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = props.events;
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events for chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const filteredData = params.slug;

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  // Converting to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  // Check if numYear is a numner
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1
  ) {
    return { props: { hasError: true } };
  }
  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: { events: filteredEvents, date: { year: numYear, month: numMonth } },
  };
}
export default FilteredEventsPage;
