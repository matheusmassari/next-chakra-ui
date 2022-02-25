import React from "react";
import EventItem from "./EventItem";

const EventList = ({ featuredEvents }) => {
  return featuredEvents.map((singleItem) => (
    <EventItem key={singleItem.id} {...singleItem} />
  ));
};

export default EventList;
