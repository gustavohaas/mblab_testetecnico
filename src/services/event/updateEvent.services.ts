import { AppDataSource } from "../../data-source";
import { IUpdateEvent } from "../../interface/Event.interface";
import { Event } from "../../entities/Event";

const updateEventService =async (data: IUpdateEvent, event_id: string) => {
    const eventRepository = AppDataSource.getRepository(Event);

    await eventRepository.update(event_id, {...data});
    
    const events = await eventRepository.find()

    const updatedEvent = events.find(event => event.id === event_id)

    return {status: 200, message: {updatedEvent}}
};

export default updateEventService