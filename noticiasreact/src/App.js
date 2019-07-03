import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';
class App extends Component {
  state = {
    noticias: []
  }

  /*  La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction. */

  /*   Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado. */

  /*   async componentDidMount() {
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=business&apiKey=f359fa9413e04223a385c56a089c0dc3`;
  
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      console.log(noticias.articles);
      this.setState({
        noticias: noticias.articles
      })
    } */

  componentDidMount() {
    this.consultarNoticias();
  }


  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=f359fa9413e04223a385c56a089c0dc3`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    console.log(noticias.articles);
    this.setState({
      noticias: noticias.articles
    })
  }


  render() {
    return (
      <Fragment>
        <Header
          titulo='Noticias React API'
        />
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
