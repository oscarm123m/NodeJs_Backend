class Video {
    private tipo:string;
    private nombre:string;
    private desarrollador:string;
    private ao:string;
    private precio: string;
    private nombreImagencamisa: string;
    private base64ImagenCamisa: string;


    constructor(tip:string, nom:string, des:string, ao:string, pre:string, nomi: string,
        bas: string){
        this.tipo=tip;
        this.nombre=nom;
        this.desarrollador=des;
        this.ao=ao;
        this.precio=pre;
        this.nombreImagencamisa=nomi;
        this.base64ImagenCamisa=bas;
    }
}

export default Video;
