import { Request, Response } from "express";
import HDAO from "../dao/HDAO";

class HControlador extends HDAO {
    public obtenerHamburguesas(req: Request, res: Response) {
        HControlador.consultarHamburguesas(res);
    }

    public crearHamburguesa(req: Request, res: Response) {
        HControlador.agregarHamburguesas(res, req.body);
    }

   
}
const hControlador = new HControlador();
export default hControlador;
