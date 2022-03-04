import { getAllEvents } from "../../../helpers/api-utils";
import EventList from "../../../components/events/EventList";
import SearchEvents from "../../../components/events/SearchEvents";
import { useRouter } from "next/router";

const AllEvents = (props) => {
  const router = useRouter()
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <SearchEvents onSearch={findEventsHandler} />
      <EventList events={props.allEvents} />
    </>
  );
};

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents: allEvents,
    },
  };
}

export default AllEvents;
