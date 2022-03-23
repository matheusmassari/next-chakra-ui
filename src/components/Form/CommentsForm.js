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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CommentsList from "./CommentsList";

const schema = yup
    .object({
        name: yup
            .string("Nome deve conter apenas caracteres!")
            .matches(
                /^[a-z ,.'-]+$/i,
                "Seu nome não deve conter números ou símbolos."
            )
            .min(3, "Nome deve ter no mínimo 3 caracteres")
            .max(30, "Nome deve ter no máximo 30 caracteres")
            .trim()
            .required(),
        email: yup.string().email("Email contem caracteres inesperados."),
        text: yup
            .string()
            .max(200, "Seu comentário deve ter no máximo 200 caracteres")
            .required(),
    })
    .required();

const FormComentarios = ({ eventId }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ resolver: yupResolver(schema) });

    const [toggleComments, setToggleComments] = useState(false);
    const [comments, setComments] = useState([]);

    const sendCommentHandler = (data) => {
        axios
            .post(`/api/comentarios/${eventId}`, {
                email: data.email,
                name: data.name,
                text: data.text,
            })
            .then((response) => console.log(response));
    };

    function setAndGetToggleComments() {
        setToggleComments(!toggleComments);
        if (!toggleComments) {
            axios
                .get(`/api/comentarios/${eventId}`)
                .then(({ data: { comments } }) => setComments(comments));
        }
    }

    return (
        <Center mt="4rem">
            <Flex direction="column">
                <Button
                    w="10rem"
                    m="0 auto"
                    mb="1rem"
                    variant="outline"
                    colorScheme="teal"
                    onClick={() => setAndGetToggleComments()}
                >
                    {toggleComments ? "Hide comments" : "Show comments"}
                </Button>
                {toggleComments && (
                    <>
                        <CommentsList comments={comments} />
                        <Box
                            w="60rem"
                            h="fit-content"
                            bgColor="gray.800"
                            borderRadius="8px"
                            padding="1rem"
                        >
                            <form onSubmit={handleSubmit(sendCommentHandler)}>
                                <Flex>
                                    <FormControl>
                                        <FormLabel
                                            htmlFor="email"
                                            color="white"
                                        >
                                            Your email:
                                        </FormLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            bgColor="white"
                                            placeholder="fulanodetal@gmail.com"
                                            {...register("email", {
                                                required:
                                                    "This field is required",
                                            })}
                                        />
                                        <Text color="yellow.500">
                                            {errors.email?.message}
                                        </Text>
                                    </FormControl>
                                    <FormControl ml="1rem">
                                        <FormLabel htmlFor="name" color="white">
                                            Your name:
                                        </FormLabel>
                                        <Input
                                            id="name"
                                            type="text"
                                            bgColor="white"
                                            placeholder="fulanodetal@gmail.com"
                                            {...register("name", {
                                                required:
                                                    "This field is required",
                                            })}
                                        />
                                        <Text color="yellow.500">
                                            {errors.name?.message}
                                        </Text>
                                    </FormControl>
                                </Flex>
                                <FormControl mt="1rem">
                                    <FormLabel htmlFor="text" color="white">
                                        Your comment:
                                    </FormLabel>
                                    <Textarea
                                        id="text"
                                        type="text"
                                        bgColor="white"
                                        placeholder="fulanodetal@gmail.com"
                                        {...register("text", {
                                            required: "This field is required",
                                        })}
                                    />
                                    <Text color="yellow.500">
                                        {errors.text?.message}
                                    </Text>
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
                    </>
                )}
            </Flex>
        </Center>
    );
};

export default FormComentarios;
