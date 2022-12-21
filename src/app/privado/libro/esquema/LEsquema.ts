import {Schema, model, Types} from "mongoose";
import Libro from "../entidad/Libro";


const LEsquema = new Schema<Libro>(
    {
        generoLibro:{type: Number,enum:[1,2,3,4], default:1},
        nombreLibro:{type: String,required: true},
        autorLibro:{type: String,required: true},
        fechaPublicacionLibro:{type: Date,required: false},
        cantidadPaginasLibro:{type: Number,required: true},
        nombreImagencamisa:{type: String,required: false},
        base64ImagenCamisa:{type: String,required: false},

    },
    {
        versionKey:false
    }
)
export default model("Libro", LEsquema, "Libro");