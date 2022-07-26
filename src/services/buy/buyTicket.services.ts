import { AppDataSource } from "../../data-source"
import { Event } from "../../entities/Event"

const buyTicketService = async (quantity: number, event_id: string) => {
    const eventRepository = AppDataSource.getRepository(Event)

    const event = await eventRepository.findOneBy({id: event_id})

    console.log(quantity)

    if (quantity <= 0) {
        return {status: 400, message: 'Quantity must be 1 or higher'}
    }

    const newQuantity = event.tickets - quantity 

    await eventRepository.update(event_id, { tickets: newQuantity });

    const boghtTickets = []

    for (let i=0; i < quantity; i++) {
        const ticket = {
            name: event.name,
            location_name: event.location_name,
            date: event.date,
            time: event.time,
            organization: event.organization
        }

        boghtTickets.push(ticket)
    }

    return {status: 200, message: {boghtTickets}}
}

export default buyTicketService