import React from "react";
import { useForm } from "react-hook-form";
import {
    Text,
    Center,
    FormControl,
    Input,
    FormLabel,
    Button,
    Box,
    Flex,
} from "@chakra-ui/react";
import axios from "axios";

const RegistroNovidades = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        axios
            .post("/api/novidades", {
                email: data.email,
            })
            .then((response) => console.log(response));
    };

    return (
        <Center mt="4rem">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <Text fontSize="4xl">Sign up to stay tuned!</Text>

                    <FormControl mt="1rem">
                        <FormLabel htmlFor="email">Email:</FormLabel>
                        <Flex>
                            <Input
                                id="email"
                                type="email"
                                placeholder="fulanodetal@gmail.com"
                                {...register("email", {
                                    required: "This field is required",
                                })}
                            />
                            <Button
                                type="submit"
                                colorScheme="teal"
                                ml="1rem"                                
                                isLoading={isSubmitting}
                            >
                                Register
                            </Button>
                        </Flex>
                    </FormControl>
                </Box>
            </form>
        </Center>
    );
};

export default RegistroNovidades;
