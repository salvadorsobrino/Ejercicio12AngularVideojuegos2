import { Component, OnInit, Input } from '@angular/core'; //Añadimos Input
import { Videojuego } from 'src/app/entidades/videojuego';


@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit {
  //Con el decorador @Input decimos que el objeto va a ser inyectado desde una clase padre.

  //Además, en este caso, Angular detecta que no esta inicializado el objeto (aunque si que 
  //lo estará ya que lo pasamos desde el padre), por lo que daría un error en tiempo de 
  //compilación. 
  //Si queremos evitar este error, debemos de configurar el fichero "tsconfig.json" con 
  //la propiedad: "strictPropertyInitialization": false
  @Input() videojuego : Videojuego;

  constructor() { }

  ngOnInit() {
  }

}
