import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:id', profilesCtrl.show)
router.get('/', profilesCtrl.index)


/*---------- Protected Routes ----------*/
router.post('/', profilesCtrl.create)
router.put('/:id', profilesCtrl.update)


export { router }
