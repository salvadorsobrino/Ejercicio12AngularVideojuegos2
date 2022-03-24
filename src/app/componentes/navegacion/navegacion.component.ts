import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  nombre:string=LoginComponent.nombre;
  constructor() {
  }
  ngOnInit() {
  }

}
