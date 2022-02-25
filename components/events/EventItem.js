import React from "react";
import {
  Flex,
  Center,
  Text,
  Image,
  Stack,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = location.split(",");
  const exploreLink = `/events/${id}`;
  console.log(formattedLocation);

  return (
    <Center my={4}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "35rem", md: "35rem" }}
        h={{ sm: "15rem", md: "15rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"md"}
      >
        <Flex flex={0.5}>
          <Image
            objectFit="cover"
            boxSize="15rem"
            align="center"
            src={image}
            alt="event image"
            borderTopLeftRadius="lg"
            borderBottomLeftRadius="lg"
          />
        </Flex>
        <Stack flex={1} py={4} justifyContent="space-between">
          <Stack>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {title}
            </Heading>
            <Text
              textAlign={"left"}
              color={useColorModeValue("gray.500", "gray.400")}
              pt={1}
              pr={1}
              fontWeight="bold"
            >
              {readableDate}
            </Text>
            <Stack spacing="1px">
              <Text
                as="i"
                textAlign={"left"}
                color={useColorModeValue("gray.700", "gray.400")}
                pt={1}
                pr={1}
              >
                {formattedLocation[0]}
              </Text>
              <Text
                as="i"
                textAlign={"left"}
                color={useColorModeValue("gray.700", "gray.400")}
                pt={1}
                pr={1}
              >
                {formattedLocation[1]}
              </Text>
            </Stack>
          </Stack>
          <Button
            flex={0.4}
            fontSize={"sm"}
            w="10rem"
            height="2rem"
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            <Link href={exploreLink}>Explore Event</Link>
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};

export default EventItem;
