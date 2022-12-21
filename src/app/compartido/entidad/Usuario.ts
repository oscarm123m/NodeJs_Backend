import Perfil from "../../privado/perfil/entidad/Perfil";


class Usuario{
    private nombreUsuario:string;
    private documento: string;
    private fechaNacimiento: string;
    private correo: string;
    private clave: string;
    private codPerfil: Perfil;

    constructor(nom:string, doc:string, fec:string, corr:string, cla:string, cod:Perfil){
        this.nombreUsuario=nom;
        this.documento=doc;
        this.fechaNacimiento=fec;
        this.correo=corr;
        this.clave=cla;
        this.codPerfil=cod;
    }
}

export default Usuario;
