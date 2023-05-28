import * as express from 'express'
import { getPublication, getPublications } from '../controllers'

const router = express.Router()

router.get('/publication/:id', getPublication)
router.get('/publications', getPublications)

export const routerPublication = router
