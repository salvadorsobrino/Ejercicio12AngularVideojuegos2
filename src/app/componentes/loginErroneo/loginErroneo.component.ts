import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginErroneo',
  templateUrl: './loginErroneo.component.html',
  styleUrls: ['./loginErroneo.component.css']
})
export class LoginErroneoComponent implements OnInit {

  opcion : number;
  errorUsuarioOculto  : boolean = true;
  errorContraseniaOculto : boolean = true;
  

  constructor(private router:Router,route:ActivatedRoute) { 
    this.opcion = route.snapshot.params["opcion"];
    this.selectError();
  }
  public selectError(){
    if (this.opcion==1){
      this.errorUsuarioOculto=false;
    } else if (this.opcion==2){
      this.errorContraseniaOculto=false;
    }
  }
  public volver(){
    //NOTA: No funcionaba con routerLink="/login" 
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
