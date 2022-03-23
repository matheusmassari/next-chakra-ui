import {connectDatabase, insertDocument} from "../../helpers/db-utils"

async function handler(req, res) {
    if (req.method === "POST") {
        const userEmail = req.body.email;

        // === Server Side Validation === //
        if (!userEmail || !userEmail.includes("@")) {
            res.status(422).json({ message: "Invalid email adress" });
            return;
        }
        // === Server Side Validation === //

        let client;

        try {
            client = await connectDatabase("nimbus");
        } catch (error) {
            res.status(500).json({
                message: "Connecting to the database failed!",
            });
            return;
        }

        try {
            await insertDocument(client, "emails", { email: userEmail });
            client.close();
        } catch (error) {
            res.status(500).json({
                message: "Inserting data failed!",
            });
        }

        res.status(201).json({ message: "Signed up!" });
    }
}

export default handler;
