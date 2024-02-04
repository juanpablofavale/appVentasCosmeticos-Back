import Tipo from "../models/Tipo.js";

const genRes = {
    response: [],
    count: 0,
    success: true,
    error: null
}

const tipoController = {
    getAll: async (req, res, next) => {
        try {
            genRes.response = await Tipo.find();
            genRes.count = genRes.response.length;
            res.status(200).json(genRes);
        } catch (err) {
            next(err)
        }
    },
    getById: async (req, res, next) => {
        try {
            genRes.response = await Tipo.findById(req.params.id)
            genRes.count = genRes.response.length || 1;
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    createMany: async (req, res, next) => {
        try {
            genRes.response = await Tipo.create(req.body)
            genRes.count = genRes.response.length || 1;
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    updateOne: async (req, res, next) => {
        try {
            genRes.response = await Tipo.findByIdAndUpdate(req.params.id, req.body, {new:true})
            genRes.count = genRes.response.length || 1;
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
    deleteOne: async (req, res, next) => {
        try {
            genRes.response = await Tipo.findByIdAndDelete(req.params.id)
            genRes.count = genRes.response.length || 1;
            res.status(200).json(genRes);
        } catch (err) {
            next(err);
        }
    },
}

export default tipoController;