import pg from "pg";
import {
  PGHOST,
  PGDATABASE,
  PGUSER,
  PGPASSWORD,
  ENDPOINT_ID,
} from "../../config.js";

const connectionString = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}&sslmode=require`;

const dbClient = new pg.Client(connectionString);

await dbClient.connect();
console.log(`Connected to PostgreSQL DB`);

export default dbClient;
