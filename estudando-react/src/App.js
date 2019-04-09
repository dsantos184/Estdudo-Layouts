import React, { Component } from 'react'
import Menu from './components/Menu/index'

import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Teste1 from './pages/Teste1'
import Teste2 from './pages/Teste2'

class App extends Component {
  
  state = {
    texto: ''
  }

  setTexto = (evento) =>{
    let s = this.state
    s.texto = evento.target.value
    this.setState(s)
  } 
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>  
            <Menu/>
            <Route exact path="/" component={Home} />
            <Route  path="/teste1" component={Teste1} />
            <Route  path="/teste2" component={Teste2} />
          </Router>
        </header>
        <section className="conteudo">
          <input type="text" name="teste" value={this.state.texto} onChange={(evento)=>this.setTexto(evento)}/>
        </section>
        <h1>{this.state.texto}</h1>
      </div>
    );
  }
}

export default App
