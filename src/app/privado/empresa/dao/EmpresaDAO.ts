import { Response } from "express";
import EmpresaEsquema from "../esquema/EmpresaEsquema";

class EmpresaDAO {

    protected static async consultarEmpresa(res: Response): Promise<any> {
        const misEmp = await EmpresaEsquema.find();
        res.status(200).json(misEmp);
    }

    
}
export default EmpresaDAO;