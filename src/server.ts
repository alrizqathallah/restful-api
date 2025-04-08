import App from "./app";
import Database from "./config/database";
import logger from "./utils/logger";
import Env from "./config/env";

class Server {
  private readonly app: App;
  private readonly port: number | string;
  private readonly env: string;
  private readonly database: Database;

  constructor() {
    this.app = new App();
    this.port = Env.PORT;
    this.env = Env.NODE_ENV;
    this.database = new Database();
  }

  public start(): void {
    try {
      this.app.express.listen(this.port, () => {
        logger.info(`Server running in ${this.env} mode on port ${this.port}`);
      });
    } catch (error) {
      logger.error(`Error starting server: ${error}`);
      process.exit(1);
    }
  }
}

const server = new Server();
server.start();
