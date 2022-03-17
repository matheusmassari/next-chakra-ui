import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/Events/EventList";
import SearchEvents from "../../components/Events/SearchEvents";

import { useRouter } from "next/router";
import Head from "next/head";

const AllEvents = (props) => {
  const router = useRouter()
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <Head>
        <title>All events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
