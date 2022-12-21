import { Request, Response } from "express";
import EmpresaDAO from "../dao/EmpresaDAO";
import VDAO from "../dao/EmpresaDAO";

class EmpresaControlador extends EmpresaDAO {
    public obtenerEmpresa(req: Request, res: Response) {
        EmpresaControlador.consultarEmpresa(res);
    }

    

   
}
const empresaControlador = new EmpresaControlador();
export default empresaControlador;
