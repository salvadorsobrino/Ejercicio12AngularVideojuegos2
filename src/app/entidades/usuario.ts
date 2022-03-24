// Clase Usuario
// Los usuarios tendran un usuario y contraseña

export class Usuario{

    private _usuario: string;
    private _contrasenia: string;

    constructor(_usuario: string, _contrasenia: string ){
        this._usuario = _usuario;
        this._contrasenia = _contrasenia;
    }
    
    public get usuario(): string {
        return this._usuario;
    }
    public set usuario(value: string) {
        this._usuario = value;
    }
    public get contrasenia(): string {
        return this._contrasenia;
    }
    public set contrasenia(value: string) {
        this._contrasenia = value;
    }
}