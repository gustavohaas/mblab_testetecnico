import { AppDataSource } from "../../data-source";
import { Event } from "../../entities/Event";

const getByParamsEventService =async (params: string) => {
    const eventRepository = AppDataSource.getRepository(Event);

    const events = await eventRepository.findBy({
        name: params,
        location_name: params,
        organization: params
    })

    if (!events) {
        return {status: 404, message: 'event not found'}
    }

    return {status: 201, message: {events}}
};

export default getByParamsEventService