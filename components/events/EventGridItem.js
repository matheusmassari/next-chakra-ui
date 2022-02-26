import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";

const EventGridItem = (props) => {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/events/${id}`;

  return (
    <Box
      h="22rem"
      w="18rem"
      bgColor="gray.300"
      borderRadius="4px"
      shadow="lg"
      pos="relative"
    >
      <Box w="100%" h="65%">
        <Image
          src={image}
          margin="0 auto"
          boxSize="100%"
          objectFit="cover"
          alt={title}
          borderTopRadius="4px"
        />
      </Box>
      <Box mt="0.5rem" ml="0.5rem">
        <Text fontWeight="700">{title.slice(0, 27) + "..."}</Text>
        <Text as="i" color="gray.600">
          {readableDate}
        </Text>
        <Box display="flex" alignItems="center">
          <HiOutlineLocationMarker size="20" />
          <Text ml="0.5rem">{location}</Text>
        </Box>
        <Flex pos="absolute" bottom="2" right="2">
          <BsLink45Deg
            size="24"
            color="#319795
"
          />
          <Link href={exploreLink}>
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
  );
};

export default EventGridItem;
