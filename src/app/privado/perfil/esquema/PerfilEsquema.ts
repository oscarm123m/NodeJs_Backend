import { Schema, model } from "mongoose";
import Perfil from "../entidad/Perfil";

const PerfilSchema = new Schema<Perfil>({
  nombrePerfil: { type: String, required: true, unique: true },
},
{
    versionKey: false,
}
);

export default model("Perfil",PerfilSchema,"Perfil");
