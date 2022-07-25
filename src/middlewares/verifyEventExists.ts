import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Event } from "../entities/Event";
import { ErrorHandler } from "../errors";

const verifyEventExists = async (req: Request, res: Response, next: NextFunction) => {
  
  const {event_id} = req.params

  const eventRepository = AppDataSource.getRepository(Event);

  const events = await eventRepository.find()

  const event = events.find(event => event.id === event_id)


  if (!event) {
    throw new ErrorHandler(409, "Email already exists.");
  }

  return next();
};

export default verifyEventExists;