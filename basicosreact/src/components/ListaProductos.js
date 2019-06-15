import React, { Component, Fragment } from 'react';
import Producto from './Producto';
class ListaProductos extends Component {
    // el state siempre debe ser un objeto cuando utilizas class component 
    state = {
        productos: [
            { id: 1, nombre: 'Camisa reactJs', precio: 30 },
            { id: 2, nombre: 'Camisa VueJs', precio: 30 },
            { id: 3, nombre: 'Camisa Angular', precio: 30 },
            { id: 4, nombre: 'Camisa Node.js', precio: 30 }
        ]
        // ,
        // totalCarrito: 500,
        // cliente: 'Juan de la torre'
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         productos: [
    //             { id: 1, name: 'Camisa reactJs', precio: 30 },
    //             { id: 2, name: 'Camisa VueJs', precio: 30 },
    //             { id: 3, name: 'Camisa Angular', precio: 30 },
    //             { id: 4, name: 'Camisa Node.js', precio: 30 }
    //         ]
    //     }
    // }

    render() {

        // Buen lugar para crear variables (entre render y return)
        const { productos } = this.state;


        return (
            <Fragment>
                <h1>Lista de Productos</h1>
                {
                    productos.map(producto => (
                        <Producto
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                }
            </Fragment>
        );
    }
}
export default ListaProductos;