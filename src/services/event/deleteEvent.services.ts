import { AppDataSource } from "../../data-source";
import { ICreateEvent } from "../../interface/Event.interface";
import { Event } from "../../entities/Event";

const deleteEventService =async (event_id: string) => {
    const eventRepository = AppDataSource.getRepository(Event);

    await eventRepository.delete(event_id)

    return {status: 200, message: 'event deleted'}
};

export default deleteEventService