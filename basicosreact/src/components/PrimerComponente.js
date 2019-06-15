import React, { Component } from 'react';

// class PrimerComponente extends Component {
//     render() {
//         return (
//             <h1>Hola Mundo!</h1>
//         );
//     }
// }

// Este se recomienda para los metodos
const PrimerComponente = () => {
    // El return es opcional
    return (
        <h1>Hola Mundo!</h1>
    );
}

// Es opcional porque se puede hacer lo siguiente
// const PrimerComponente = () => (<h1>Hola Mundo!</h1>);


// Este se recomienda para el componente padre
// function PrimerComponente() {
//     return (
//         <h1>Hola Mundo!</h1>
//     );
// }

// Se puede eliminar { Component }, ya no es necesario

export default PrimerComponente;