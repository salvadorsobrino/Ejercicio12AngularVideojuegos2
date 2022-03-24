import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { VideojuegoComponent } from './componentes/videojuego/videojuego.component';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';
import { AboutUsComponent} from './componentes/aboutUs/aboutUs.component';
import { ContactUsComponent } from './componentes/contactUs/contactUs.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieDePaginaComponent } from './componentes/pieDePagina/pieDePagina.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { RegistroComponent } from './componentes/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideojuegoComponent,
    VideojuegosComponent,
    NavegacionComponent,
    AboutUsComponent,
    ContactUsComponent,
    CabeceraComponent,
    PieDePaginaComponent,
    DetallesComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
