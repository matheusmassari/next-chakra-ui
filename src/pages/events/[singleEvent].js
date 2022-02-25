import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import {
  Text,
  Box,
  Flex,
  Image,
  Center,
  Stack,
  Container,
} from "@chakra-ui/react";
import { FaRegCalendarMinus } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const SingleEvent = () => {
  // Getting query ID from the route hook
  const router = useRouter();
  const queryId = router.query.singleEvent;

  // Filter the events by ID (import the utility function from dummy data)
  const event = getEventById(queryId);

  if (!event) {
    return <Text>No event found!</Text>;
  }

  return (
    <>    
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
          src={`../../${event.image}`}
          alt={event.title}
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
                {event.date}
              </Text>
            </Box>
            <Box>
              <HiOutlineLocationMarker color="#81E6D9" size="24" />
              <Text mt="0.5rem" color="teal.200">
                {event.location}
              </Text>
            </Box>
          </Stack>
        </Box>
      </Flex>
      <Center>
        <Container w="45rem">
          <Text mt="2rem" align="center">
            {event.description}
          </Text>
        </Container>
      </Center>
    </>
  );
};

export default SingleEvent;
