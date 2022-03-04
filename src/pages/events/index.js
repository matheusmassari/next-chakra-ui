import { getAllEvents } from "../../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../../components/events/EventList";
import SearchEvents from "../../../components/events/SearchEvents";

const AllEvents = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)  
  };
  
  return (
    <>
      <SearchEvents onSearch={findEventsHandler} />
      <EventList events={allEvents} />
    </>
  );
};

export default AllEvents;
