import {Schema, model, Types} from "mongoose";
import Hamburguesa from "../entidad/Hamburguesa";

const HEsquema = new Schema<Hamburguesa>(
    {
        tipo:{type: Number, required: true},
        precio:{type: Number, required: true},
        disponibilidad:{type: Number, required: true},

    },
    {
        versionKey:false
    }
)
export default model("Hamburguesa", HEsquema, "Hamburguesa");