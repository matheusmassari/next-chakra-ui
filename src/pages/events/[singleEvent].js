import React from "react";
import Head from "next/head";
import { getEventById, getAllEvents } from "../../helpers/api-utils";
import { FaRegCalendarMinus } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  Text,
  Box,
  Flex,
  Image,
  Center,
  Stack,
  Container,
} from "@chakra-ui/react";

const SingleEvent = (props) => {
  const { description, date, image, location, title } = props.singleEvent;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center w="100%" h="25vh" bgGradient="linear(to-tr, green.200, teal.600)">
        <Text
          fontSize="6xl"
          fontWeight="700"
          color="white"
          mb="5rem"
          textShadow="1px 1px #4A5568"
        >
          Programming for everyone
        </Text>
      </Center>
      <Flex
        w="40rem"
        h="18rem"
        bgColor="gray.800"
        margin="0 auto"
        mt="-4rem"
        borderRadius="5px"
        alignItems="center"
      >
        <Image
          src={image}
          alt={title}
          boxSize="15rem"
          objectFit="cover"
          borderRadius="full"
          border="2px"
          borderColor="gray.200"
          ml="1.5rem"
        />
        <Box ml="3rem">
          <Stack spacing="4">
            <Box>
              <FaRegCalendarMinus color="#81E6D9" size="22" />
              <Text mt="0.5rem" color="teal.200">
                {readableDate}
              </Text>
            </Box>
            <Box>
              <HiOutlineLocationMarker color="#81E6D9" size="24" />
              <Text mt="0.5rem" color="teal.200">
                {location}
              </Text>
            </Box>
          </Stack>
        </Box>
      </Flex>
      <Center>
        <Container w="45rem">
          <Text mt="2rem" align="center">
            {description}
          </Text>
        </Container>
      </Center>
    </>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.singleEvent;
  const singleEvent = await getEventById(Number(eventId));

  return {
    props: {
      singleEvent: singleEvent,
    },
  };
}
export async function getStaticPaths() {
  const allEvents = await getAllEvents();
  const paths = allEvents.map((event) => {
    const id = event.id;
    const stringId = id.toString();
    return { params: { singleEvent: stringId } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export default SingleEvent;
