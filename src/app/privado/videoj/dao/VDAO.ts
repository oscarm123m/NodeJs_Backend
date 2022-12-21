import { Response } from "express";
import VEsquema from "../esquema/VEsquema";

class VDAO {

    protected static async consultarVideo(res: Response): Promise<any> {
        const misVid = await VEsquema.find();
        res.status(200).json(misVid);
    }

    protected static async agregarVideo(res: Response, parametros: any): Promise<any> {
        delete parametros._id;
        delete parametros.datosUsuario;

        const miVid = new VEsquema(parametros);
        miVid.save((miErrosito, objVid) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "Error al Crear el video" });
            } else {
                res.status(200).json({
                    "mensajito": "video Creado Correctamente",
                    "objeto": objVid
                })
            }
        });
    }

    
}
export default VDAO;