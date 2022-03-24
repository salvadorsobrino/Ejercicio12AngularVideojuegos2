import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  nombre:string=LoginComponent.nombre;
  id:number;
  titulo:string;
  compania:string;
  imagen:string;
  valoracionMedia:number;
  constructor(route:ActivatedRoute) {
    this.id = route.snapshot.params["id"];
    this.titulo = route.snapshot.params["titulo"];
    this.compania = route.snapshot.params["compania"];
    this.imagen = route.snapshot.params["imagen"];
    this.valoracionMedia = route.snapshot.params["valoracionMedia"];
   }
  
  ngOnInit() {
  }

}
