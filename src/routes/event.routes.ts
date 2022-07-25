import { Router } from "express";
import verifyEventExists from "../middlewares/verifyEventExists"
import EventController from "../controllers/event/event.controller"

const routes = Router()

export const eventRoutes = () => {
    
    routes.post('/', EventController.createEvent)
    routes.get('/', EventController.getAllEvents)
    routes.get('/:params', EventController.getByParams)
    routes.delete('/:event_id', verifyEventExists, EventController.deleteEvent)
    routes.patch('/:event_id', verifyEventExists, EventController.updateEvent )

    return routes
}