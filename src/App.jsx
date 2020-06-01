import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Clock from './components/Clock';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      id: 1,
      post: {},
      message: 'Lifecycle',
      showClock: true 
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

  handlerUpdate = () => {
    this.forceUpdate()
  }

  handlerClock = () => {
    this.setState({showClock: !this.state.showClock})
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
        {this.state.showClock && <Clock />}
        

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
                <button onClick={this.handlerUpdate}>Force Update</button>
                <button onClick={this.handlerClock}>
                  {
                    this.state.showClock ? "Hide clock" : "Show clock"
                  }
                </button>
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


Método componentWillUnmount

Memory leak (fugas de memoria)
Suceden cuanto tenemos eventos, intervalos o cualquier tipo de automatizacion que esta preparada para funcionar sobre un componente y ese componente por el motivo que fuera ya no esta (porque renderizamos nuevos componentes, porque lo estamos ocultando, etc). 

Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

Siempre que se utilizan eventos, intervalos o cualquier codigo que este a la escucha de algo al desmontar el componente hay que limpiarlo para no tener fugas de memoria o afectar al rendimiento (ya que van quedando elementos en memoria cache).




*/