import React, { Component, Fragment } from 'react';
import Header from './components/Header'


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      id: 1,
      post: {},
      message: 'Lifecycle' 
    };
  }
  
  async componentDidMount(){
    // Peticiones HTTP
    
    // fetch
    /* fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data)) */

    // Async await
    const {id} = this.state
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    
    // Actualizacion del estado
    this.setState({post: data})


    // Asignacion de eventos
    window.addEventListener('scroll', () => console.log('Scroll'))

  }

  handlerId = () => {
    this.setState({ id: this.state.id + 1})
  }

  handlerMessage = () => {
    this.setState({message: 'Lifecycle cambiado'})
  }


  async componentDidUpdate(prevProps, prevState){
    console.log(prevState.id, this.state.id)
    if(prevState.id !== this.state.id) {
      // Async await
      const {id} = this.state
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await res.json()
      // Actualizacion del estado
      this.setState({post: data})
    }
  }

  render() {

    const {post} = this.state

    if (true) {
      return (
      <>
        <Header title={this.state.message}/>
        <Fragment>
        
          <div>
            {
              /* posts.map(post => (
                <Fragment key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </Fragment>
              )) */
            }
            {
              <Fragment>
                <button onClick={this.handlerId}>Next ID</button>
                <button onClick={this.handlerMessage}>Change Header</button>
                <h2>Post con id: {this.state.id}</h2>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </Fragment>
            }
          </div>      
        </Fragment>
      </>
      );
    } 

    else return null

    }

}

export default App;




/*
Shorthands

imrc
import React, { Component } from 'react'

imr
import React from 'react'

cccs
class component

rsc
crea un componente entero con su nombre

----------------------------------------------------------------------------

Metodo constructor
React primero leera el constructor y despues render()
El constructor es donde vamos a iniciar el estado (state) suponiendo que solo tengamos disponible constructor.
El constructor es el sitio adecuado para iniciar el estado y para 'bindear eventos' (Event binding)


Metodo render()
El siguiente metodo que se ejecuta luego del constructor es el metodo render().
El metodo render se ejecuta tanto en la fase de montaje como en la fase de actualizacion.
Dentro del metodo render podemos devolver codigo JSX o un componente.

Dentro del render NO se puede actualizar el estado (state).
NO es valido utilizar 'setState' dentro del render ya que genera un bucle infinto ya que el componente no sale jamas de la actualizacion.


componentDidMount()
Solo se ejecuta en la fase de montaje.

Nos permite:
Peticiones HTTP
Asignacion de eventos
Actualizacion del estado



componentDidUpdate con state
Este ciclo se va a disparar cuando cambien las props (New props), cuando cambie el estado (set­State) o cuando hagamos un force­Update().







*/