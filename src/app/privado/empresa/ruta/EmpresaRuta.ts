import {Router} from "express";
import EmpresaControlador from "../controlador/EmpresaControlador";

class EmpresaRuta{
    public apiRutaEmpresa:Router;

    constructor(){
        this.apiRutaEmpresa=Router();
        this.cargarRutas();
    }

    public cargarRutas():void{
        this.apiRutaEmpresa.get("/all",EmpresaControlador.obtenerEmpresa);
        
        
    }
}

const empresaRuta = new EmpresaRuta();
export default empresaRuta.apiRutaEmpresa;