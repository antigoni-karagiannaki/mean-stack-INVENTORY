import * as mongodb from "mongodb";
import { Product } from "./product";

export const collections: {
    products?: mongodb.Collection<Product>;
} = {};

export async function connectToDatabase(uri: string) {
    const client = new mongodb.MongoClient(uri);
    await client.connect();

    const db = client.db("meanStackExample");
    await applySchemaValidation(db);

    const productsCollection = db.collection<Product>("products");
    collections.products = productsCollection;
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Product model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "position", "type", "description", "selling_price"],
            additionalProperties: false,
            properties: {
                _id: {},
                name: {
                    bsonType: "string",
                    description: "'name' is required and is a string",
                },
                position: {
                    bsonType: "string",
                    description: "'position' is required and is a string",
                    minLength: 5
                },
                type: {
                    bsonType: "string",
                    description: "'type' is required and is one of 'beer', 'wine', or 'softdrink'",
                    enum: ["beer", "wine", "softdrink"],
                },
                description: {
                    bsonType: "string",
                    description: "'description' is required and is a string",
                },
                selling_price: {
                    bsonType: "number",
                    description: "'selling_price' is required and is a number",
                },
            },
        },
    };

    // Try applying the modification to the collection, if the collection doesn't exist, create it
   await db.command({
        collMod: "products",
        validator: jsonSchema
    }).catch(async (error: mongodb.MongoServerError) => {
        if (error.codeName === "NamespaceNotFound") {
            await db.createCollection("products", {validator: jsonSchema});
        }
    });
}
