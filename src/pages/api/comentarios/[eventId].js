// -> rota:  api/comments/id-de-exemplo
import { getAllDocuments } from "../../../helpers/api-utils";
import { connectDatabase, insertDocument } from "../../../helpers/db-utils";

async function handler(req, res) {
    const eventId = req.query.eventId;

    let client;
    try {
        client = await connectDatabase("events");
    } catch (error) {
        res.status(500).json({ message: "Connecting to the database failed!" });
    }

    /* POST */
    if (req.method === "POST") {
        const { email, name, text } = req.body;
        /* === Server-side validation === */
        if (
            !email.includes("@") ||
            !name ||
            name.trim() === "" ||
            !text ||
            text.trim() === ""
        ) {
            res.status(422).json({ message: "Invalid input." });
            client.close();
            return;
        }
        /* === Server-side validation === */

        const newComment = {
            email,
            name,
            text,
            eventId,
        };

        let result;
        try {
            result = await insertDocument(client, "comments", newComment);
            newComment._id = result.insertedId;
            res.status(201).json({
                message: "Added comment.",
                comment: newComment,
            });
        } catch (error) {
            res.status(500).json({ message: "Inserting comment failed!" });
            client.close();
        }
    }

    /* GET */
    if (req.method === "GET") {        
        const db = client.db();
        try {
        const documents = await getAllDocuments(
            db,
            "comments",
            { _id: -1 },
            { eventId: eventId }
        );        
        res.status(200).json({ comments: documents });
        } catch (error) {
            res.status(500).json({
                message: "Could not get comments for this section!",
            });
        }
    }
    client.close();
}

export default handler;
