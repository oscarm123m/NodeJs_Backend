import {Response} from "express";
import UsuarioEsquema from "../../../compartido/esquema/UsuarioEsquema";
import Perfil from "../../../compartido/entidad/Usuario";

class UsuarioDAO{

    protected static async consultarUsuarios(res:Response):Promise<any>{
        const misUsuarios = await UsuarioEsquema.find();
        res.status(200).json(misUsuarios);
    }
    protected static async consultarUsuario(res: Response, identificador: any): Promise<any> {
        const existeUsuario = await UsuarioEsquema.findOne({ _id: identificador });

        if (existeUsuario) {
            res.status(200).json(existeUsuario);
        } else {
            res.status(400).json({ "mensajito": "No existe el perfil" })
        }
    }

    protected static async agregarUsuario(res:Response, parametros:any):Promise<any>{
        const miPerfilsito = new UsuarioEsquema(parametros);
        miPerfilsito.save((miErrosito, objPerfil)=>{
           if(miErrosito){
            res.status(400).json({"mensajito":"Error al Crear el Usuario"});
           }else{
            res.status(200).json({"mensajito":"Usuario Creado Correctamente",
        "objeto":objPerfil
            })
           }
        });
    }

    protected static async borrarUsuario(res:Response, identificador:any):Promise<any>{
        UsuarioEsquema.findByIdAndDelete(identificador, (miErrosito:any, objRespuesta:any) =>{
            if(miErrosito){
                res.status(400).json({"mensajito":"Error al Eliminar el Usuario"});
            }else{
                res.status(200).json({
                    "mensajito": "Usuario eliminado correctamente",
                    "objeto": objRespuesta
                })
            }
        })
    }

    protected static async modificarUsuario(res: Response, identificador: any, parametros: any):Promise<any>{
        UsuarioEsquema.findByIdAndUpdate({"_id":identificador}, {$set:parametros}, (miErrosito: any, objRespuesta: any)=>{
           if(miErrosito){
            console.log(miErrosito)
            res.status(400).json({"mensajito": "No se pudo editar el usuario"});
           } else{
            res.status(200).json({"mensajito": "Exito se edito el usuario",
            "objeto": objRespuesta
            })
           }
        });
    }
}
export default UsuarioDAO;