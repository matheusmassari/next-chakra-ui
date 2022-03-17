import React from "react";
import { Box, Flex, Center, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/events/${id}`;

  return (
    <Center>
      <Box
        mt="2rem"
        w="35rem"
        h="15rem"
        border="1px"
        borderColor="gray.300"
        bgColor="gray.200"
        borderRadius="8px"
        shadow="lg"
      >
        <Box h="100%" display="flex">
          <Image
            src={image}
            h="100%"
            w="15rem"
            objectFit="cover"
            borderLeftRadius="8px"
            alt={title}
          />
          <Box ml="1rem" mt="1rem">
            <Text fontSize="1.25rem" fontWeight="600">
              {title.slice(0, 25) + "..."}
            </Text>
            <Text mt="1rem">{readableDate}</Text>
            <Flex mt="1rem" direction="column">
              <Text as="i">{location}</Text>
            </Flex>
            <Flex mt="4.5rem" ml="12rem" alignItems="center">
              <BsLink45Deg
                size="24"
                color="#319795
"
              />
              <Link href={exploreLink} passHref>
                <Text
                  ml="0.5rem"
                  as="a"
                  color="teal.500"
                  _hover={{ cursor: "pointer" }}
                >
                  Explore
                </Text>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default EventItem;
