import {Request, Response} from "express";
import nanoid from "nanoid";
import RegistroDAO from "../dao/RegistroDAO";

class RegistroControlador extends RegistroDAO{

    public registrarUsuario(req:Request, res:Response){
        const usuarioRegistro = req.body;
        usuarioRegistro.documentoUsuario = 'DOC_'+nanoid.nanoid(15);
        usuarioRegistro.fechaNacimientoUsuario='0000-01-01';
        RegistroControlador.registroUsuario(res, usuarioRegistro);
    }

}

const registroControlador = new RegistroControlador();
export default registroControlador;