import React from "react";
import { Text, Box } from "@chakra-ui/react";

const CommentsList = ({ comments }) => {
    return (
        <Box my="1rem">
            {comments.map((singleComment) => {
                const { _id, name, text } = singleComment;
                return (
                    <Box key={_id} my="1rem">
                        <Text>{text}</Text>
                        <Text
                            color="gray.500"
                            textAlign="right"
                            fontWeight="bold"
                        >
                            By {name}
                        </Text>
                        <Box
                            mt="0.5rem"
                            borderBottom="1px solid"
                            color="gray.300"
                        />
                    </Box>
                );
            })}
        </Box>
    );
};

export default CommentsList;
