import { Response } from "express";
import jwt from "jsonwebtoken";
import UsuarioEsquema from "../../../compartido/esquema/UsuarioEsquema";

class AccesoDAO {
  protected static async inicioSesion(res: Response, correo: any, clave: any) {
    await UsuarioEsquema.find({ correoUsuario: correo, claveUsuario: clave })
      .then((respuesta: any) => {
        const objRespuesta = respuesta[0];
        console.log(respuesta);

        if (respuesta.length != 0) {
          const payLoad = {
            codUsuario: objRespuesta._id,
            correo: objRespuesta.correoUsuario,
          };

          const miLlave = String(process.env.CLAVE_SUPER_SECRETA);

          const miTonkesito = jwt.sign(payLoad, miLlave);

          res.status(200).json({ tokenUSTA: miTonkesito });
        } else {
          res.status(400).json({ Mensajito: "Usuario o Contraseña no valido" });
        }
      })
      .catch((miErrosito) => {
        res.status(400).json({ Mensajito: "Error al Iniciar Sesion" });
      });
  }
}
export default AccesoDAO;
