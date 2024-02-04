import { Schema, model, Types } from "mongoose";

let collection = 'tipos';

let schema = new Schema({
    nombreTipo: {type:String},
    subMarca: {type:String},
    material: {type:String},
    color: {type:String},
    fragancia: {type:String},
    nombreOriginal: {type:String},
    familiaOlfativa: {type:String},
    descripcionOlfativa: {type:String},
    genero: {type:String},
},{
    timestamps: true
});

let Tipo = model(collection, schema);

export default Tipo;