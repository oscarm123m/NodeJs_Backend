import { Request, Response } from "express";
import PerfilDAO from "../dao/PerfilDAO";

class PerfilControlador extends PerfilDAO {
    public obtenerPerfiles(req: Request, res: Response) {
        PerfilControlador.consultarPerfiles(res);
    }

    public obtenerPerfil(req: Request, res: Response) {
        PerfilControlador.consultarPerfil(res, req.params.codPerfil);
    }

    public crearPerfil(req: Request, res: Response) {
        PerfilControlador.agregarPerfil(res, req.body);
    }

    public eliminarPerfil(req: Request, res: Response) {
        PerfilControlador.borrarPerfil(res, req.params.codPerfil);
    }

    public editarPerfil(req: Request, res: Response) {
        PerfilControlador.modificarPerfil(res, req.params.codPerfil, req.body);
    }
}
const perfilControlador = new PerfilControlador();
export default perfilControlador;
