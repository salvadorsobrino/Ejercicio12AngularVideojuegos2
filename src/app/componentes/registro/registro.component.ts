import { Component, OnInit } from '@angular/core'
import { GestorUsuario } from 'src/app/negocio/gestorUsuario';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: string ="";
  passw: string ="";
  gu: GestorUsuario =  new GestorUsuario();

  constructor(private router:Router) { }

  public anadirUsuario(){

    
    let usuario: Usuario = new Usuario(this.user, this.passw);

    this.gu.anadirUsuario(usuario);
    alert("El usuario "+usuario.usuario+" ha sido creado con éxito. Volviendo a la pantalla inicial... ")
    this.router.navigate(['/login']); //Vuelve a la pantalla inicial
    
  }

  ngOnInit() {
  }

}
