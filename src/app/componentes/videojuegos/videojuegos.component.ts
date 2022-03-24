import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GestorVideojuego } from 'src/app/negocio/gestorVideojuego';


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css'],
})
export class VideojuegosComponent implements OnInit {
  nombre:string;
  gv: GestorVideojuego =  new GestorVideojuego();
  listaVideojuegos: Videojuego[] = this.gv.listaVideojuegos();

  constructor(private router:Router,route:ActivatedRoute) {
    this.nombre = route.snapshot.params["nombre"];
  }
  public seleccionar(videojuego: Videojuego): void {
    let id = videojuego.id;
    let titulo = videojuego.titulo;
    let compania = videojuego.compania;
    let imagen = videojuego.imagen;
    let valoracionMedia = videojuego.valoracionMedia;
    this.router.navigate(['/detalles',id,titulo,compania,imagen,valoracionMedia]);
  }
  ngOnInit() {}
}
