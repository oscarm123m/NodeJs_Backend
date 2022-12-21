import { Request, Response } from "express";
import AccesoDAO from "../dao/AccesoDAO";

class AccesoControlador extends AccesoDAO {
  public accederSistema(req: Request, res: Response) {
    console.log(req.body);
    const correoUsuario = req.body.correoUsuario;
    const claveUsuario = req.body.claveUsuario;
    const correo = req.body.nombreUsuario;
    AccesoControlador.inicioSesion(res, correoUsuario, claveUsuario);
  }
}

const accesoControlador = new AccesoControlador();
export default accesoControlador;
