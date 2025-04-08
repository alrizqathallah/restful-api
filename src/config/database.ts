import mongoose from "mongoose";

import logger from "../utils/logger";
import Env from "./env";

class Database {
  constructor() {
    this.connect();
  }

  private async connect(): Promise<void> {
    const uri = Env.DB_URI;
    const dbName = Env.DB_NAME;

    if (!uri || !dbName) {
      console.error("DB_URI or DB_NAME is missing in environment variables");
      process.exit(1);
    }

    try {
      await mongoose.connect(`${uri}/${dbName}`);
      logger.info("Database connected successfully");
    } catch (error) {
      logger.error(`Database connected failed: ${error}`);
      process.exit(1);
    }
  }
}

export default Database;
