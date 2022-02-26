import { Grid, Center } from "@chakra-ui/react";
import React from "react";
import EventItem from "./EventItem";
import EventGridItem from "./EventGridItem";

const EventList = ({ events }) => {
  if (events.length <= 36) {
    return (
      <Center>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {events.map((singleItem) => (
            <EventItem key={singleItem.id} {...singleItem} />
          ))}
        </Grid>
      </Center>
    );
  }
  return (
    <Center my="2rem">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {events.map((singleEvent) => (
          <EventGridItem key={singleEvent.id} {...singleEvent} />
        ))}
      </Grid>
    </Center>
  );
};

export default EventList;
