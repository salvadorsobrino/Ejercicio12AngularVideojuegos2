import { Videojuego } from "../entidades/videojuego";
import { VideojuegoDAO } from "../persistencia/videojuegoDAO";


export class GestorVideojuego {
  constructor() {}

  public listaVideojuegos(): Videojuego[] {
    let arrayVideojuegos = VideojuegoDAO.devolverlistaVideojuegos();
    return arrayVideojuegos;
  }
}
