import { Response } from "express";
import CiudadEsquema from "../esquema/CiudadEsquema";

class CiudadDAO {

    protected static async consultarCiudad(res: Response): Promise<any> {
        const misCiu = await CiudadEsquema.find();
        res.status(200).json(misCiu);
    }

    
}
export default CiudadDAO;