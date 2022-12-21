import { Request, Response } from "express";
import VDAO from "../dao/VDAO";

class VControlador extends VDAO {
    public obtenerVideo(req: Request, res: Response) {
        VControlador.consultarVideo(res);
    }

    public crearVideo(req: Request, res: Response) {
        VControlador.agregarVideo(res, req.body);
    }

   
}
const vControlador = new VControlador();
export default vControlador;
