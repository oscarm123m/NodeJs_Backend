import { Response } from "express";
import LEsquema from "../esquema/LEsquema";

class LDAO {

    protected static async consultarLibros(res: Response): Promise<any> {
        const misLib = await LEsquema.find();
        res.status(200).json(misLib);
    }

    protected static async consultarLibro(res: Response, identificador:any): Promise<any> {
        const existeLib = await LEsquema.findOne({_id:identificador});
        if (existeLib) {
            res.status(200).json(existeLib);
        }else{
            res.status(400).json({"mensajito":"Libro no existe"});
        }
    }

    protected static async agregarLibro(res: Response, parametros: any): Promise<any> {
        delete parametros._id;
        delete parametros.datosUsuario;

        const miLib = new LEsquema(parametros);
        miLib.save((miErrosito, objLib) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "Error al Crear el Libro" });
            } else {
                res.status(200).json({
                    "mensajito": "Libro Creado Correctamente",
                    "objeto": objLib
                })
            }
        });
    }

    protected static async borrarLibro(res: Response, identificador: any): Promise<any> {
        LEsquema.findByIdAndDelete(identificador, (miErrosito: any, objRespuesta: any) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "Error al Eliminar el Libro" });
            } else {
                res.status(200).json({
                    "mensajito": "Libro eliminado correctamente",
                    "objeto": objRespuesta
                })
            }
        })
    }

    protected static async modificarLibro(res: Response, identificador: any, parametros: any): Promise<any> {

        delete parametros.datosUsuario;
        LEsquema.findByIdAndUpdate({ "_id": identificador }, { $set: parametros }, (miErrosito: any, objRespuesta: any) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "No se pudo editar el Libro" });
            } else {
                res.status(200).json({
                    "mensajito": "Exito se edito el Libro",
                    "objeto": objRespuesta
                })
            }
        });
    }

    
}
export default LDAO;