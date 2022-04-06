import React, { useState } from "react";
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
    Alert,
    AlertTitle,
    CloseButton,
    AlertIcon,
    AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";

const RegistroNovidades = () => {
    const [disable, setDisable] = useState(true)
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true);
        axios
            .post("/api/novidades", {
                email: data.email,
            })
            .then((response) => {
                setIsLoading(false);
                setFeedbackMessage(response.data.message);
            });
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
                                isLoading={isLoading}
                                isDisabled={disable}
                            >
                                Register
                            </Button>
                        </Flex>
                    </FormControl>
                    {feedbackMessage && (
                        <Alert status="success" mt="1rem" borderRadius="10px">
                            <AlertIcon />
                            <Box flex="1">
                                <AlertTitle>Success!</AlertTitle>
                                <AlertDescription display="block">
                                    {feedbackMessage}
                                </AlertDescription>
                            </Box>
                            <CloseButton
                                position="absolute"
                                right="8px"
                                top="8px"
                                onClick={() => setFeedbackMessage("")}
                            />
                        </Alert>
                    )}
                </Box>
            </form>
        </Center>
    );
};

export default RegistroNovidades;
