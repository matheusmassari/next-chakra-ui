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
    Textarea,
} from "@chakra-ui/react";
import axios from "axios";

const FormComentarios = () => {
    const [toggleComments, setToggleComments] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        axios
            .post("/api/comentarios", {
                email: data.email,
            })
            .then((response) => console.log(response));
    };

    return (
        <Center mt="4rem">
            <Flex direction="column">
                <Button
                    w="10rem"
                    m="0 auto"
                    mb="1rem"
                    variant="outline"
                    colorScheme="teal"
                    onClick={() => {
                        setToggleComments(!toggleComments);
                    }}
                >
                    {toggleComments ? "Hide comments" : "Show comments"}
                </Button>
                {toggleComments && (
                    <Box
                        w="60rem"
                        h="fit-content"
                        bgColor="teal.300"
                        borderRadius="8px"
                        padding="1rem"
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex>
                                <FormControl>
                                    <FormLabel htmlFor="email">
                                        Your email:
                                    </FormLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        bgColor="white"
                                        placeholder="fulanodetal@gmail.com"
                                        {...register("email", {
                                            required: "This field is required",
                                        })}
                                    />
                                </FormControl>
                                <FormControl ml="1rem">
                                    <FormLabel htmlFor="email">
                                        Your name:
                                    </FormLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        bgColor="white"
                                        placeholder="fulanodetal@gmail.com"
                                        {...register("email", {
                                            required: "This field is required",
                                        })}
                                    />
                                </FormControl>
                            </Flex>
                            <FormControl mt="1rem">
                                <FormLabel htmlFor="email">
                                    Your comment:
                                </FormLabel>
                                <Textarea
                                    id="email"
                                    type="email"
                                    bgColor="white"
                                    placeholder="fulanodetal@gmail.com"
                                    {...register("email", {
                                        required: "This field is required",
                                    })}
                                />
                            </FormControl>
                            <Center mt="1rem">
                                <Button
                                    type="submit"
                                    colorScheme="teal"
                                    m="0 auto"
                                    isLoading={isSubmitting}
                                >
                                    Register
                                </Button>
                            </Center>
                        </form>
                    </Box>
                )}
            </Flex>
        </Center>
    );
};

export default FormComentarios;
