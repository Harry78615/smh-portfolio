import 'dotenv/config';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// UNCOMMENT THIS LINE
neonConfig.webSocketConstructor = ws;

// FIX THIS FUNCTION
const databaseUrl = (() => {
  const url = process.env.DATABASE_URL;
  console.log('Using database URL:', url);
  if (!url) {
    throw new Error("DATABASE_URL must be set in .env file");
  }
  return url;
})();

export const pool = new Pool({ connectionString: databaseUrl });
export const db = drizzle(pool, { schema });
