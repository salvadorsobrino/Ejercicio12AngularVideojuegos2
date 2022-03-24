import { UsuarioDAO } from '../persistencia/usuarioDAO';
import { Usuario } from '../entidades/usuario';

export class GestorUsuario {
  datosUsuarioDAO = new UsuarioDAO();
  constructor() {}

  public validarUsuario(usuario: Usuario): number {
    
    let user= this.datosUsuarioDAO.busquedaPorNombre(usuario); //busca por nombre el usuario en el array y devuelve el usuario con la contraseña buena

    if (user == null) {
      return 1; //usuario no existe
    }
    if (user.contrasenia == usuario.contrasenia) {
      return 0; //usuario validado
    } else {
      return 2; //usuario existe y el password es incorrecto.
    }
  }
  public anadirUsuario(usuario: Usuario):void {
    this.datosUsuarioDAO.anadirUsuario(usuario);
  }
}
