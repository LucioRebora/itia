import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let instance: PostgresJsDatabase<typeof schema> | undefined;

function getDb() {
    if (!instance) {
        if (!process.env.DATABASE_URL) {
            throw new Error("DATABASE_URL no está definida en el .env");
        }
        const client = postgres(process.env.DATABASE_URL, { ssl: "require" });
        instance = drizzle(client, { schema });
    }
    return instance;
}

export const db = new Proxy({} as PostgresJsDatabase<typeof schema>, {
    get(_target, prop, receiver) {
        return Reflect.get(getDb(), prop, receiver);
    },
});
