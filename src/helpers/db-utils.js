import { MongoClient } from "mongodb";

export async function connectDatabase(database) {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nimbus.duqgg.mongodb.net/${database}?retryWrites=true&w=majority`
    );

    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);

    return result;
}
