import {Schema, model, Types} from "mongoose";
import Ciudad from "../entidad/Ciudad";
import Cine from "../entidad/Ciudad";

const CiudadEsquema = new Schema<Ciudad>(
    {
        nombre:{type: String,required: true,},

    },
    {
        versionKey:false
    }
)
export default model("Ciudad", CiudadEsquema, "Ciudad");