import { Request, Response } from "express";
import LDAO from "../dao/LDAO";

class LControlador extends LDAO {
    public obtenerLibros(req: Request, res: Response) {
        LControlador.consultarLibros(res);
    }

    public obtenerLibro(req: Request, res: Response) {
        LControlador.consultarLibro(res, req.params.codLibro);
    }

    public crearLibro(req: Request, res: Response) {
        LControlador.agregarLibro(res, req.body);
    }

    public eliminarLibro(req: Request, res: Response) {
        LControlador.borrarLibro(res, req.params.codLibro);
    }

    public editarLibro(req: Request, res: Response) {
        LControlador.modificarLibro(res, req.params.codLibro, req.body);
    }

   
}
const lControlador = new LControlador();
export default lControlador;
