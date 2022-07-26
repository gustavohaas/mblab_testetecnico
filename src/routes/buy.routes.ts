import { Router } from "express";
import buyController from "../controllers/buy/buy.controller";
import verifyEventExists from "../middlewares/verifyEventExists";

const routes = Router()

export const buyRoutes = () => {

    routes.post('/:event_id', verifyEventExists ,buyController.buyTicket)

    return routes
}