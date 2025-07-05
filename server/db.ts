import 'dotenv/config'; // This line is already at the very top and should remain there.

import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// neonConfig.webSocketConstructor = ws;

const databaseUrl = (() => {
    const url = process.env.DATABASE_URL;
    console.log('DEBUG: DB.TS Connection String (from IIFE):', url);
    if (!url) {
        throw new Error(
            "DATABASE_URL must be set. Did you forget to provision a database?"
        );
    }
    return url;
})();

export const pool = new Pool({ connectionString: databaseUrl });
export const db = drizzle(pool, { schema });
