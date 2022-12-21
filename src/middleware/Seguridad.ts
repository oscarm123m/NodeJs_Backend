import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

class Seguridad {
  public verificarToken(req: Request, res: Response, next: NextFunction): any {
    if (!req.headers.authorization) {
      res
        .status(401)
        .json({ respuesta: "Peticion negada por el sistema de seguridad" });
    } else {
      try {
        const miToken = req.headers.authorization?.split(" ")[1] as string;

        const miLlave = String(process.env.CLAVE_SUPER_SECRETA);
        const datos = jwt.verify(miToken, miLlave);
        req.body.datosUsuario = datos;
        next();
      } catch (miErrosito) {
        res.status(401).json({ respuesta: "Intento de Fraude" });
      }
    }
  }
}

const seguridad = new Seguridad();
export default seguridad;
