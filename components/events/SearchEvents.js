import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Select,
} from "@chakra-ui/react";

const SearchEvents = (props) => {
  return (
    <Center mt="2rem">
      <Box h="4.2rem" w="36rem" bgColor="gray.300" borderRadius="4px" py="0.5rem" shadow="base">
        <FormControl>
          <Flex alignItems="center" ml="2rem">
            <FormLabel
              htmlFor="year"
              fontWeight="700"
              fontSize="1.5rem"
              mt="0.4rem"
            >
              Year:
            </FormLabel>
            <Select id="year" type="number" w="6rem" bgColor="white">
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </Select>
            <Flex alignItems="center" ml="2rem">
              <FormLabel
                htmlFor="year"
                fontWeight="700"
                fontSize="1.5rem"
                mt="0.4rem"
              >
                Month:
              </FormLabel>
              <Select id="month" type="number" w="8rem" bgColor="white">
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="mars">Mars</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </Select>
              <Button type="submit" colorScheme="teal" ml="2rem">
                Find
              </Button>
            </Flex>
          </Flex>
        </FormControl>
      </Box>
    </Center>
  );
};

export default SearchEvents;
