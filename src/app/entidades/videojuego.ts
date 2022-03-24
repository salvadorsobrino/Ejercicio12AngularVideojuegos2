// Clase Videojuego
// Los videojuegos tendran un identificador, un titulo, una compañia, un icono/imagen y una valoración media.

export class Videojuego{

    private _id : number = 0;
    private static contadorId : number = 1; //Contador del ID del Videojuego.

    private _titulo: string;
    private _compania: string;
    private _imagen: string;
    private _valoracionMedia: number;
    


    constructor(_titulo : string, _compania:string, _imagen:string, _valoracionMedia:number ){
        this._id = Videojuego.contadorId++;
        this._titulo = _titulo;
        this._compania = _compania;
        this._imagen = _imagen;
        this._valoracionMedia = _valoracionMedia;
    }

    public get id() : number{ //Solo método get ya que no es modificable
        return this._id;
    }
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }
    public get compania(): string {
        return this._compania;
    }
    public set compania(value: string) {
        this._compania = value;
    }
    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }
    public get valoracionMedia(): number {
        return this._valoracionMedia;
    }
    public set valoracionMedia(value: number) {
        this._valoracionMedia = value;
    }

    public toString() : string {
        return `ID: ${this._id}, Titulo: ${this.titulo}, Compañia: ${this.compania}, URL Imagen: ${this.imagen}, Valoración Media: ${this.valoracionMedia}`
    }

}