import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent} from './componentes/aboutUs/aboutUs.component';
import { ContactUsComponent} from './componentes/contactUs/contactUs.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginErroneoComponent } from './componentes/loginErroneo/loginErroneo.component';
import { VideojuegoComponent } from './componentes/videojuego/videojuego.component';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {
    path : '', //En este caso decimos el componente que mostraremos por defecto
    component : LoginComponent
  },
  {
    path : 'login', //cuando definimos el 'path' no puede empezar por '/'
    component : LoginComponent
  },
  {
    path : 'loginErroneo/:opcion', //aqui estamos pasando parametros en el pahtparam, eje: loginErroneo/1 o loginErroneo/2
    component : LoginErroneoComponent
  },{
    path : 'videojuegos/:nombre',
    component : VideojuegosComponent
  },  {
    path : 'videojuego',
    component : VideojuegoComponent
  },{
    path : 'detalles/:id/:titulo/:compania/:imagen/:valoracionMedia',
    component : DetallesComponent
  },
  { 
    path: 'aboutus', 
    component: AboutUsComponent
  },
  { 
    path: 'contactus', 
    component: ContactUsComponent
  },
  { 
    path: 'registro', 
    component: RegistroComponent
  },
  { 
    path: '**', // Wildcard route for a 404 page
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
