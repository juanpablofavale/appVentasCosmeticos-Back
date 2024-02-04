import { Router } from "express";
import tipoController from "../controller/tipoController.js"

const { getAll, getById, createMany, updateOne, deleteOne } = tipoController;

let tipoRouter = Router();

tipoRouter.get('/', getAll);
tipoRouter.get('/:id', getById);
tipoRouter.post('/', createMany);
tipoRouter.put('/:id', updateOne);
tipoRouter.delete('/:id', deleteOne);

export default tipoRouter;