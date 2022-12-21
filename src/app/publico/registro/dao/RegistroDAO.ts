import {Response} from "express";
import  jwt  from "jsonwebtoken";
import UsuarioEsquema from "../../../compartido/esquema/UsuarioEsquema";
import PerfilEsquema  from "../../../privado/perfil/esquema/PerfilEsquema"


class RegistroDAO{
    
  protected static async registroUsuario(res: Response, parametros: any):Promise<any>{

    const nombrePerfilDefecto=String(process.env.PERFIL_USUSARIO_EXTERNO);
    const jsonPerfil= {nombrePerfil:nombrePerfilDefecto};

    const existePerfil= await PerfilEsquema.findOne(jsonPerfil).exec();

    if(existePerfil){
      parametros.codPerfil=existePerfil._id;
    }else{
      const objPerfil= new PerfilEsquema(jsonPerfil);
      objPerfil.save();
      parametros.codPerfil=objPerfil._id;
    }

    const objRegistro = new UsuarioEsquema(parametros);

    objRegistro.save((miErrosito, objRespuesta: any)=>{
      if(miErrosito){
        res.status(400).json({"mensajito": "Error al registrar el Usuaurio"});
      }else{
        const payload={
            codUsuario:objRespuesta._id,
            correo:objRespuesta.correo
        };

        const miLlave = String(process.env.CLAVE_SUPER_SECRETA);
        const miTokensito = jwt.sign(payload,miLlave);
        res.status(200).json({ "tokenUSTA": miTokensito });
      }
    });
  }

}
export default RegistroDAO;
