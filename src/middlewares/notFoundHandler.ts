import { Request, Response, NextFunction } from "express";

class NotFoundHandler {
  handle(req: Request, res: Response, next: NextFunction) {
    res.status(404).json({
      status: "fail",
      message: "Not Found",
    });
  }
}

export default new NotFoundHandler();
