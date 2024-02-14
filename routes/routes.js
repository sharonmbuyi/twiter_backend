import { Router } from "express";
import {getAll,getOne,createOne , updateOne, deleteOne} from'./controleur/ctlr';
const router = Router();

router.get('/getAll',getAll)
router.get('getOne/:id',getOne)
router.post('createOne/:id',createOne)
router.put('updateOne/:id',updateOne)
router.delete('deleteOne/:id',deleteOne)




export default router;