class Hamburguesa{
    private tipo:string;
    private precio: string;
    private disponibilidad: string;

    constructor(tip:string, pre:string, dis:string){
        this.tipo=tip;
        this.precio=pre;
        this.disponibilidad=dis;
    }
}

export default Hamburguesa;
