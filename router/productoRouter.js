import { Router } from "express";
import productoController from "../controller/productoController.js";

let productoRouter = Router();

const { getAll, getById, createMany, updateOne, deleteOne } = productoController;

productoRouter.get('/', getAll);
productoRouter.get('/:id', getById);
productoRouter.post('/', createMany);
productoRouter.put('/:id', updateOne);
productoRouter.delete('/:id', deleteOne);

export default productoRouter;