import Tipo from "../models/Tipo.js";
import Producto from "../models/producto.js";

const genRes = {
    response: [],
    count: 0,
    success: true,
    error: null
}

const productoController = {
    getAll: async (req, res, next) => {
        try {
            genRes.response = await Producto.find().populate('tipoProducto');
            genRes.count = genRes.response.length;
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    getById: async (req, res, next) => {
        try {
            genRes.response = await Producto.findById(req.params.id).populate('tipoProducto');
            genRes.count = genRes.response.length || 1;
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    createMany: async (req, res, next) => {
        try {
            const tipo = await Tipo.findById(req.body.tipoProducto);
        } catch (err) {
            genRes.success = false;
            genRes.error = "Tipo de producto no encontrado.";
            res.status(500).json(genRes);
        }
        try {
            genRes.response = await Producto.create(req.body);
            genRes.count = genRes.response.length || 1;
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    updateOne: async (req, res, next) => {
        try {
            genRes.response = await Producto.findByIdAndUpdate(req.params.id, req.body, {new:true});
            genRes.count = genRes.response.length || 1;
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    deleteOne: async (req, res, next) => {
        try {
            genRes.response = await Producto.findByIdAndDelete(req.params.id);
            genRes.count = genRes.response.length || 1;
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
}

export default productoController;