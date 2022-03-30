import {Router} from 'express';
import { allColors , createColor, deleteColor, updateColor} from './controllers.js'

const router = Router()

router.get("/" ,allColors)
router.post("/" ,createColor)
router.delete("/" ,deleteColor)
router.patch("/" ,updateColor)

export default router