import React from "react";
import { Text, Center, Spinner, Button } from "@chakra-ui/react";
import Link from "next/link";
import { getFilteredEvents } from "../../../helpers/api-utils";
import EventList from "../../../components/events/EventList";

const FilteredEventsPage = (props) => {
  const { filteredEvents } = props;
  
  // QUERY ERROR CASE
  if (props.hasError) {
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

  return <EventList events={filteredEvents} />;
};

export async function getServerSideProps(context) {
  const {
    params: { slug },
  } = context;
  const filteredYear = Number(slug[0]);
  const filteredMonth = Number(slug[1]);
  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  
  return {
    props: {
      filteredEvents: filteredEvents,
    },
  };
}

export default FilteredEventsPage;
