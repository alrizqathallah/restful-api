import { Request, Response, NextFunction } from "express";
import Status from "../constants/http-status-code";

class NotFoundHandler {
  handle(req: Request, res: Response, next: NextFunction) {
    res.status(Status.NOT_FOUND).json({
      status: "fail",
      message: "Not Found",
    });
  }
}

export default new NotFoundHandler();
