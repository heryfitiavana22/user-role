import * as express from 'express'
import { getNotifications } from '../controllers'

const router = express.Router()

router.get('/notifications', getNotifications)

export const routerNotification = router
