import { Schema, model, Types } from "mongoose";

let collection = 'productos';

let schema = new Schema({
    marca: {type:String},
    nombre: {type:String},
    codigo: {type:String},
    tipoProducto: {type:Types.ObjectId, ref:'tipos'},
    subtipo: {type:String},
    imagen: {type:String},
    presentacion: {type:String},
    descripcion: {type:String},
    costo: {type:Number},
    porcUtilBrut: {type:Number},
    precio: {type:Number},
    stock: {type:Number},
    stockMin: {type:Number},
    stockMax: {type:Number},
},{
    timestamps: true
});

let Producto = model(collection, schema);

export default Producto;