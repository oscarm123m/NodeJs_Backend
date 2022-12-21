import {Schema, model, Types} from "mongoose";
import Empresa from "../entidad/Empresa";
import Ciudad from "../entidad/Empresa";
import Cine from "../entidad/Empresa";

const EmpresaEsquema = new Schema<Empresa>(
    {
        nombre:{type: String,required: true,},

    },
    {
        versionKey:false
    }
)
export default model("Empresa", EmpresaEsquema, "Empresa");