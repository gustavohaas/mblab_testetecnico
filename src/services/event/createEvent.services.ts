import { AppDataSource } from "../../data-source";
import { ICreateEvent } from "../../interface/Event.interface";
import { Event } from "../../entities/Event";

const createEventService =async ({ name, location_name, date, description, time, organization, tickets }: ICreateEvent) => {
    const eventRepository = AppDataSource.getRepository(Event);

    const newEvent = eventRepository.create({
        name: name,
        location_name: location_name,
        date: date,
        description: description,
        time: time,
        organization: organization,
        tickets: tickets
    });

    await eventRepository.save(newEvent);

    return {status: 200, message: newEvent}
};

export default createEventService