import { Router } from "express";
import tipoRouter from "./tipoRouter.js";
import productoRouter from "./productoRouter.js";

let router = Router();

router.use('/tipos', tipoRouter);
router.use('/productos', productoRouter);

router.get('/', (req, res, next)=>{
    res.send({
        response: "API URL en direccion /api",
        success: true,
        error: null
    })
})

export default router;