import { AppDataSource } from "../../data-source";
import { Event } from "../../entities/Event";

const getAllEventService =async () => {
    const eventRepository = AppDataSource.getRepository(Event);

    const events = await eventRepository.find()

    return {status: 201, message: {events}}
};

export default getAllEventService