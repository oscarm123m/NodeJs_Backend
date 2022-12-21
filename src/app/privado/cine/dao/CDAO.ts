import { Response } from "express";
import CEsquema from "../esquema/CEsquema";

class CDAO {

    protected static async consultarCine(res: Response): Promise<any> {
        const misCin = await CEsquema.find();
        res.status(200).json(misCin);
    }

    protected static async consultarCinee(res: Response, identificador:any): Promise<any> {
        const existeCin = await CEsquema.findOne({_id:identificador});
        if (existeCin) {
            res.status(200).json(existeCin);
        }else{
            res.status(400).json({"mensajito":"Cine no existe"});
        }
    }

    protected static async agregarCine(res: Response, parametros: any): Promise<any> {
        delete parametros._id;
        delete parametros.datosUsuario;

        const miCin = new CEsquema(parametros);
        miCin.save((miErrosito, objCin) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "Error al Crear el Cineo" });
            } else {
                res.status(200).json({
                    "mensajito": "Cineo Creado Correctamente",
                    "objeto": objCin
                })
            }
        });
    }

    protected static async borrarCine(res: Response, identificador: any): Promise<any> {
        CEsquema.findByIdAndDelete(identificador, (miErrosito: any, objRespuesta: any) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "Error al Eliminar el Cine" });
            } else {
                res.status(200).json({
                    "mensajito": "Cine eliminado correctamente",
                    "objeto": objRespuesta
                })
            }
        })
    }

    protected static async modificarCine(res: Response, identificador: any, parametros: any): Promise<any> {

        delete parametros.datosUsuario;
        CEsquema.findByIdAndUpdate({ "_id": identificador }, { $set: parametros }, (miErrosito: any, objRespuesta: any) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "No se pudo editar el Cine" });
            } else {
                res.status(200).json({
                    "mensajito": "Exito se edito el Cine",
                    "objeto": objRespuesta
                })
            }
        });
    }

    
}
export default CDAO;