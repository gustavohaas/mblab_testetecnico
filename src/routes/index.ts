import { Express } from 'express'
import {eventRoutes} from './event.routes'
import { buyRoutes } from './buy.routes'

export const appRoutes = (app: Express) => {

    app.use('/events', eventRoutes())
    app.use('/buy', buyRoutes())
    
}