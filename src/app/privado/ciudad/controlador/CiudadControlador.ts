import { Request, Response } from "express";
import CiudadDAO from "../dao/CiudadDAO";


class CiudadControlador extends CiudadDAO {
    public obtenerVideo(req: Request, res: Response) {
        CiudadControlador.consultarCiudad(res);
    }

    

   
}
const ciudadControlador = new CiudadControlador();
export default ciudadControlador;
