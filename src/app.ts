import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import logger from "./utils/logger";
import notFoundHandler from "./middlewares/notFoundHandler";
import errorHandler from "./middlewares/errorHandler";
import Status from "./constants/http-status-code";

class App {
  public readonly express: Application;

  constructor() {
    this.express = express();
    this.registerMiddlewares();
    this.registerSecurity();
    this.registerRoutes();
    this.registerErrorHandling();
  }

  private registerMiddlewares(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cookieParser());
    this.express.use(morgan("dev"));
  }

  private registerSecurity(): void {
    this.express.use(
      cors({
        credentials: true,
        origin: true, // Dapat disesuaikan dengan Application Origin
      })
    );
    this.express.use(helmet());
  }

  private registerRoutes(): void {
    // TODO: Health Check
    this.express.get("/health", (req: Request, res: Response) => {
      logger.debug("Healt check endpoint called");
      res.status(Status.OK).json({
        status: "success",
        message: "Health Check OK",
      });
    });
  }

  private registerErrorHandling() {
    this.express.use(notFoundHandler.handle);
    this.express.use(errorHandler.handle);
  }
}

export default App;
