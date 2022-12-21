import { Request, Response } from "express";
import CDAO from "../dao/CDAO";

class CControlador extends CDAO {
    public obtenerCine(req: Request, res: Response) {
        CControlador.consultarCine(res);
    }
    public obtenerCinee(req: Request, res: Response) {
        CControlador.consultarCinee(res, req.params.codCine);
    }

    public crearCine(req: Request, res: Response) {
        CControlador.agregarCine(res, req.body);
    }

    public eliminarCine(req: Request, res: Response) {
        CControlador.borrarCine(res, req.params.codCine);
    }

    public editarCine(req: Request, res: Response) {
        CControlador.modificarCine(res, req.params.codCine, req.body);
    }

   
}
const cControlador = new CControlador();
export default cControlador;
