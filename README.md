Hacer una aplicacion en Angular que muestre un listado-detalle de Videojuegos.

Los videojuegos tendran un identificador, un titulo, una compañia, un icono/imagen y una valoración media.

Para entrar en la página deberemos de estar registrados, se mostrará una página de login al principio
donde deberemos de poner nuestro usuario y nuestro password. La aplicación tendrá algunos usuarios por
defecto.

En caso de que podamos entrar en la aplicación se mostrará una página con nuestro nombre de usuario y 
el listado de videojuegos (tendremos algunos videojuegos ya dados de alta), pero solo se mostrará en el 
listado el identificador, el icono/imagen y el titulo.

Si pulsamos en un videojuego, nos llevará a su detalle, el cual podremos ver todos los atributos del 
videojuego. Esta pagina tendrá tambien un boton para volver.
(Otro caso)
En caso de que no podamos entrar en la página, se nos mostrará otra vez la pagina de login diciendo que
no hemos podido acceder. Debemos de distinguir si no hemos podido porque el usuario no existe o porque
hemos puesto mal el password. Si no hemos puesto el nombre el password, tambien nos debera avisar.

La pagina web tendra tambien una página que muestre los datos para contactarnos y otra pagina que hable sobre
nosotros. A estas páginas accederemos mediante un menu de navegación (tambien en este menu tendremos el 
listado de videojuegos)

Se deben hacer estilos en la aplicación, aplicar routing en todas las paginas y aplicar comunicación 
entre componentes.

NOTA: Se ha añadido la funcionalidad de crear usuarios nuevos temporalmente, ya que se pierden al cerrar el servidor.

ng new 01_HolaMundo. Aceptaremos los valores predeterminados (Y y Enter). Añadimos Routing (Y)
ng serve -o arranca nuestro servidor
CTRL+C en la terminal donde hemos arrancado nuestro servidor para cerrar