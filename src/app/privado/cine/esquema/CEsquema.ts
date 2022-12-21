import {Schema, model, Types} from "mongoose";
import Cine from "../entidad/Cine";

const CEsquema = new Schema<Cine>(
    {
        ciudad:{type: String,required: true,},
        empresa:{type: String,required: true,},
        nombre:{type: String,required: true,},

    },
    {
        versionKey:false
    }
)
export default model("Cine", CEsquema, "Cine");