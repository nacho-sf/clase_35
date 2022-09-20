# clase_35

## Petición HTTP asíncrona a un servidor desde REACT (hacer un fetch a una API)

En el mundo de las clases, hay que hablar de "ciclo de vida" de los componentes:

`Initialization` -> `Mounting` -> `Updation` -> `Unmounting`

Este ciclo se controla mediante unos métodos:

- `componentDidMount` (componente se montó):

La función sería que cuando el componente se ha montado, hacer algo. Por ejemplo, controlar que hasta que no se pinten los componentes de la web (Header, Footer, Main...) no comience a hacer el fetch a la API, para evitar que la carga de la página que se quede bloqueada.

- `componentDidUpdate` (componente se actualizó)

- `componentWillUnmount` (componente se borrará)



