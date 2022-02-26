import { getAllEvents, DUMMY_EVENTS } from "../../../dummy-data";
import { Text } from "@chakra-ui/react";

const AllEvents = () => {
  const data = getAllEvents();

  return <Text>All events page</Text>;
};

export default AllEvents;
