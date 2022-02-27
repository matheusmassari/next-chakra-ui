import React from "react";
import { useRouter } from "next/router";
import { Text, Center, Spinner, Button } from "@chakra-ui/react";
import Link from "next/link";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/events/EventList";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  // LOADING STATE
  if (!filterData) {
    return (
      <Center h="80vh" w="100vw">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      </Center>
    );
  }

  // GETTING VALUES FROM QUERY
  const filteredYear = Number(filterData[0]);
  const filteredMonth = Number(filterData[1]);

  // QUERY ERROR CASE
  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <Center h="80vh" w="100vw" display="flex" flexDirection="column">
        <Text fontSize="4xl" color="teal.700">
          Invalid filter. please adjust your values!
        </Text>
        <Link href="/events" passHref>
          <Button
            as="a"
            mt="1rem"
            bgColor="teal.400"
            color="white"
            _hover={{ style: "none" }}
          >
            Go Back
          </Button>
        </Link>
      </Center>
    );
  }

  // CORRECT QUERY CASE
  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  }); // -> array that might be empty
  
  // FALSY RESPONSE CASE
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Center h="80vh" w="100vw" display="flex" flexDirection="column">
        <Text fontSize="4xl" color="teal.700">
          No events found for the chosen date.
        </Text>
        <Link href="/events" passHref>
          <Button
            as="a"
            mt="1rem"
            bgColor="teal.400"
            color="white"
            _hover={{ style: "none" }}
          >
            Go Back
          </Button>
        </Link>
      </Center>
    );
  }

  return (
    <EventList events={filteredEvents} />
  )
};

export default FilteredEventsPage;
