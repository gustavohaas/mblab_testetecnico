import { Request, Response } from 'express'
import createEventService from '../../services/event/createEvent.services'
import deleteEventService from '../../services/event/deleteEvent.services';
import getAllEventService from '../../services/event/getAllEvent.services';
import getByParamsEventService from '../../services/event/getByParams.services';
import updateEventService from '../../services/event/updateEvent.services';

class EventController {
    createEvent = async (req:Request, res: Response) => {

        const { name, location_name, date, description, time, organization, tickets } = req.body
        const {status, message} = await createEventService({ name, location_name, date, description, time, organization, tickets })

        return res.status(status).json(message)
    };

    deleteEvent = async (req:Request, res: Response) => {
        const { event_id } = req.params
        const {status, message} = await deleteEventService(event_id)

        return res.status(status).json(message)
    }

    getAllEvents = async (req: Request, res: Response) => {
        const {status, message} = await getAllEventService()

        return res.status(status).json(message)
    }

    getByParams = async (req:Request, res: Response) => {
        const { params } = req.params
        const {status, message} = await getByParamsEventService(params)

        return res.status(status).json(message)
    }

    updateEvent = async (req:Request, res: Response) => {
        const { event_id } = req.params
        const data = req.body
        const {status, message} = await updateEventService(data, event_id)

        return res.status(status).json(message)
    }
}

export default new EventController()