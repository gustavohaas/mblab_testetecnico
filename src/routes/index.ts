import { Express } from 'express'
import {eventRoutes} from './event.routes'

export const appRoutes = (app: Express) => {

    app.use('/events', eventRoutes())
}