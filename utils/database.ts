import mongoose from "mongoose";
import logger from "./logger";

declare global {
    var mongoose: any;
}

const NEXT_DB_CONNECTION_STRING = process.env.NEXT_DB_CONNECTION_STRING || "";

if (!NEXT_DB_CONNECTION_STRING) {
    throw new Error(
        "Please define the NEXT_DB_CONNECTION_STRING environment variable inside .env.local"
    );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose
            .connect(NEXT_DB_CONNECTION_STRING, opts)
            .then((mongoose) => {
                logger.info("Connected to database");
                return mongoose;
            })
            .catch((e) => {
                logger.error(e, "Failed to connect to database");
            });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export async function disconnectDb() {
    await mongoose.connection.close();

    logger.info("Disconnected from database");
}
