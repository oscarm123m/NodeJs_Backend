import {Schema, model, Types} from "mongoose";
import Usuario from "../entidad/Usuario";

const UsuarioEsquema = new Schema<Usuario>(
    {
        nombreUsuario:{type: String, required: true},
        documentoUsuario:{type: String, required: true, unique: true },
        fechaNacimientoUsuario:{type: Date, required: true},
        correoUsuario:{type: String, required: true, unique: true},
        claveUsuario:{type: String, required: true},
        codPerfil:{type: Types.ObjectId, ref: "Perfil", required: true},

    },
    {
        versionKey:false
    }
)
export default model("Usuario", UsuarioEsquema, "Usuario");