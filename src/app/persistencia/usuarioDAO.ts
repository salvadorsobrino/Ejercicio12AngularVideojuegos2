//Data Acces Object (DAO)
import { Usuario } from "../entidades/usuario";

export class UsuarioDAO{
    private static listaUsuarios: Usuario[] = [];

    static{
        this.listaUsuarios.push(new Usuario("admin", "admin"));
        this.listaUsuarios.push(new Usuario("felix", "1234"));
        this.listaUsuarios.push(new Usuario("1234", "1234"));
    }
    constructor(){}	

    public busquedaPorNombre(usuario:Usuario){
		for(let i=0;i<UsuarioDAO.listaUsuarios.length;i++) {
			if(UsuarioDAO.listaUsuarios[i].usuario == usuario.usuario) {
				return UsuarioDAO.listaUsuarios[i]; //devuelve el del array, ya que la contraseña puede ser distinta
			}
		}
		return null;
	}
    public anadirUsuario(usuario:Usuario) : void {
        UsuarioDAO.listaUsuarios.push(usuario);
    }
}