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
import { useForm } from "react-hook-form";

const SearchEvents = (props) => {
  const { onSearch } = props;
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => onSearch(data.year, data.month);

  return (
    <Center mt="2rem">
      <Box
        h="4.2rem"
        w="36rem"
        bgColor="gray.300"
        borderRadius="4px"
        py="0.5rem"
        shadow="base"
      >
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
            <Select
              id="year"
              type="number"
              w="6rem"
              bgColor="white"
              defaultValue="2022"
              {...register("year")}
            >
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
              <Select
                id="month"
                type="number"
                w="8rem"
                bgColor="white"
                defaultValue="january"
                {...register("month")}
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">Mars</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Select>
              <Button
                type="submit"
                colorScheme="teal"
                ml="2rem"
                onClick={handleSubmit(onSubmit)}
              >
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
