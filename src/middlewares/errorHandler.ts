import { Request, Response, NextFunction } from "express";

import logger from "../utils/logger";
import Env from "../config/env";
import Status from "../constants/http-status-code";

interface CustomError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

class ErrorHandler {
  handle(
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    const statusCode = err.statusCode || Status.INTERNAL_SERVER_ERROR;
    const message = err.message || "Internal Server Error";

    logger.error(
      `Error: ${message} | Status: ${statusCode} | Path: ${req.path}`
    );

    res.status(statusCode).json({
      status: "error",
      message,
      ...(Env.NODE_ENV !== "production" && { stack: err.stack }),
    });
  }
}

export default new ErrorHandler();
