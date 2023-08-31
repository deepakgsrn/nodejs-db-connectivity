import { config as _config } from "dotenv";

_config();
// Loading .env Configs at the Start before reading it from process.env

export const { PORT, PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } =
  process.env;
