import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentWillMount(){
    //evita erros ao carregar a página
    this.setState({ dados: {} });
  }

  aoDigitar = (event) => {
    this.cep = event.target.value;
  }

  aoClicar = (event) => {
    axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
    .then((resposta) => {
      this.setState({dados: resposta.data});
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" onChange={this.aoDigitar}/>
          <button onClick={this.aoClicar}>Buscar</button>
        </div>

        <p>Endereço: {this.state.dados.logradouro}</p>
        <p>Bairro: {this.state.dados.bairro}</p>
        <p>Cidade: {this.state.dados.localidade}</p>
        <p>Estado: {this.state.dados.uf}</p>
      </div>
    );
  }
}

export default App;
