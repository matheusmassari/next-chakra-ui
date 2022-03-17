import Head from "next/head";
import EventList from "../components/Events/EventList";
import { getFeaturedEvents, getAllEvents } from "../helpers/api-utils";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Generated by create next app" />  
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <EventList events={props.featuredEvents} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  

  return {
    props: {
      featuredEvents: featuredEvents
    },
    revalidate : 1800
  }
}
