import { getAllEvents } from "../../../dummy-data";
import { Text } from "@chakra-ui/react";
import EventList from "../../../components/events/EventList";
import SearchEvents from "../../../components/events/SearchEvents";

const AllEvents = () => {
  const allEvents = getAllEvents();

  return (
    <>
      <SearchEvents />
      <EventList events={allEvents} />
    </>
  );
};

export default AllEvents;
