import { Request, Response } from 'express'
import buyTicketService from '../../services/buy/buyTicket.services'

class BuyController {
    buyTicket = async (req:Request, res: Response) => {
        const { quantity } = req.body
        const { event_id } = req.params
        const {status, message} = await buyTicketService(quantity, event_id)

        return res.status(status).json(message)
    }
}

export default new BuyController()