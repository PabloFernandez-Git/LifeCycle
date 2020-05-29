import React, { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {  };
  }
  
  render() {
    return (
        <h1>LifeCycle</h1>      
    );
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


Metodo constructor
React primero leera el constructor y despues render()
El constructor es donde vamos a iniciar el estado (state) suponiendo que solo tengamos disponible constructor.



*/