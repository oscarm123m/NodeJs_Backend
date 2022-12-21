import {Request, Response} from "express";
import UsuarioDAO from "../dao/UsuarioDAO";

class UsuarioControlador extends UsuarioDAO{
    public obtenerUsuarios(req:Request, res:Response){
        UsuarioControlador.consultarUsuarios(res);
    }
    public obtenerUsuario(req: Request, res: Response) {
        UsuarioControlador.consultarUsuario(res, req.params.codUsuario);
    }

    public crearUsuario(req:Request, res:Response){
        UsuarioControlador.agregarUsuario(res, req.body);
    }

    public eliminarUsuario(req:Request, res:Response){
        UsuarioControlador.borrarUsuario(res, req.params.codUsuario);
    }

    public editarUsuario(req: Request, res:Response){
        UsuarioControlador.modificarUsuario(res, req.params.codUsuario, req.body);
    }
}
const usuarioControlador = new UsuarioControlador();
export default usuarioControlador;