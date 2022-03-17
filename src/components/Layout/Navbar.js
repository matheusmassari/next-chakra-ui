import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Flex
      width="100%"
      h="10vh"
      bgColor="gray.800"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link href="/" passHref>
        <Text
          fontSize="3rem"
          ml="10rem"
          color="teal.100"
          _hover={{ cursor: "pointer" }}
        >
          NextEvents
        </Text>
      </Link>
      <Link href="/events" passHref>
        <Text
          fontSize="1.5rem"
          mr="10rem"
          color="teal.100"
          _hover={{ cursor: "pointer" }}
        >
          Browse All Events
        </Text>
      </Link>
    </Flex>
  );
};

export default Navbar;
