//Data Acces Object (DAO)
import { Videojuego } from 'src/app/entidades/videojuego';

export class VideojuegoDAO{
    private static listaVideojuegos: Videojuego[] = [];
    //videojuego: Videojuego | null = null;
    static{
        this.listaVideojuegos.push(new Videojuego('League Of Legends','Riot Games','assets/lol.png',8.3));
        this.listaVideojuegos.push(new Videojuego('Mass Effect','BioWare','assets/masseffect.png', 8.5));
        this.listaVideojuegos.push(new Videojuego('Elder Ring','Bandai Namco Entertainment','assets/eldenring.jpg',8.8));
    }
    constructor(){}

    public static devolverlistaVideojuegos(): Videojuego[] {
        return VideojuegoDAO.listaVideojuegos;
    }
}