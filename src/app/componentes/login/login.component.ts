import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestorUsuario } from 'src/app/negocio/gestorUsuario'; //Importamos la clase a utilizar
import { Usuario } from 'src/app/entidades/usuario'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string ="";
  public static nombre = "";
  passw: string ="";
  gu: GestorUsuario =  new GestorUsuario();
  
  constructor(private router:Router) { 
  }

  public routingProgramatico(){
    
    let usuario: Usuario = new Usuario(this.user, this.passw);
    let opcion : number = this.gu.validarUsuario(usuario);
    LoginComponent.nombre = this.user;
    console.log(LoginComponent.nombre);
    console.log(opcion);
    
    switch(opcion){
      case(0): //usuario validado
      this.router.navigate(['/videojuegos',this.user]);
      break;
      case(1): //usuario no existe
      this.router.navigate(['/loginErroneo',opcion]); 
      break;
      case(2): //usuario existe y el password es incorrecto.
      this.router.navigate(['/loginErroneo',opcion]);
      break;
    }
    
  }
  ngOnInit() {
  }

}
