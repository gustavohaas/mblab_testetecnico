import express, { NextFunction, Request, Response } from "express";
import { errorHandler } from "./errors";

import {appRoutes} from "./routes";

const app = express();

app.use(express.json());
appRoutes(app);

app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  return errorHandler(err, res);
});

export default app;