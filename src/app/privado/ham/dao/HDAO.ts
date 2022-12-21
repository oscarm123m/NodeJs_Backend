import { Response } from "express";
import HEsquema from "../esquema/HEsquema";

class HDAO {

    protected static async consultarHamburguesas(res: Response): Promise<any> {
        const misHam = await HEsquema.find();
        res.status(200).json(misHam);
    }

    protected static async agregarHamburguesas(res: Response, parametros: any): Promise<any> {
        delete parametros._id;
        delete parametros.datosUsuario;

        const miHam = new HEsquema(parametros);
        miHam.save((miErrosito, objHam) => {
            if (miErrosito) {
                res.status(400).json({ "mensajito": "Error al Crear el Perfil" });
            } else {
                res.status(200).json({
                    "mensajito": "Perfil Creado Correctamente",
                    "objeto": objHam
                })
            }
        });
    }

    
}
export default HDAO;