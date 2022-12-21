import { Response } from "express";
import PerfilEsquema from "../esquema/PerfilEsquema";

class PerfilDAO {

    protected static async consultarPerfiles(res: Response): Promise<any> {
        const misPerfiles = await PerfilEsquema.find();
        res.status(200).json(misPerfiles);
    }

    protected static async consultarPerfil(res: Response, identificador: any): Promise<any> {
        const existePerfil = await PerfilEsquema.findOne({ _id: identificador });

        if (existePerfil) {
            res.status(200).json(existePerfil);
        } else {
            res.status(400).json({ "mensajito": "No existe el perfil" })
        }
    }

    protected static async agregarPerfil(res: Response, parametros: any): Promise<any> {
        delete parametros._id;
        delete parametros.datosUsuario;

        const miPerfilsito = new PerfilEsquema(parametros);
        miPerfilsito.save((miErrosito, objPerfil) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "Error al Crear el Perfil" });
            } else {
                res.status(200).json({
                    "mensajito": "Perfil Creado Correctamente",
                    "objeto": objPerfil
                })
            }
        });
    }

    protected static async borrarPerfil(res: Response, identificador: any): Promise<any> {
        PerfilEsquema.findByIdAndDelete(identificador, (miErrosito: any, objRespuesta: any) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "Error al Eliminar el Perfil" });
            } else {
                res.status(200).json({
                    "mensajito": "Perfil eliminado correctamente",
                    "objeto": objRespuesta
                })
            }
        })
    }

    protected static async modificarPerfil(res: Response, identificador: any, parametros: any): Promise<any> {

        delete parametros.datosUsuario;
        PerfilEsquema.findByIdAndUpdate({ "_id": identificador }, { $set: parametros }, (miErrosito: any, objRespuesta: any) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "No se pudo editar el perfil" });
            } else {
                res.status(200).json({
                    "mensajito": "Exito se edito el perfil",
                    "objeto": objRespuesta
                })
            }
        });
    }
}
export default PerfilDAO;