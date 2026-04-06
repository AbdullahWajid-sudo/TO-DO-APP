import { PrismaClient } from "../app/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const prismaClientSingleton = () => {
  // 1. Setup the connection pool to Supabase
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Essential for local dev in Pakistan
  });

  // 2. Create the adapter (The "Translator")
  const adapter = new PrismaPg(pool);

  // 3. Pass the adapter INTO the PrismaClient (The Fix)
  return new PrismaClient({ adapter });
};

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
