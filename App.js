/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { Topo, Resultado, Painel } from './src/components';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = { num1: '', num2: '', operacao: 'soma', resultado: '' };

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    let resultado = 0;

    if (this.state.num1 && this.state.num2) {
      switch (this.state.operacao) {
        case 'soma':
          resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
          break;
        case 'subtracao':
          resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
          break;
        default:
          resultado = 0;
          break;
      }
    }

    this.setState({ resultado: resultado.toString() });
  }

  atualizaValor(nomeCampo, numero) {
    if (!isNaN(numero)) {
      const obj = {};
      obj[nomeCampo] = numero;

      this.setState(obj);
    }
  }

  atualizaOperacao(operacao) {
    this.setState({ operacao });
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel 
          num1={this.state.num1} 
          num2={this.state.num2} 
          atualizaValor={this.atualizaValor}
          operacao={this.state.operacao}
          atualizaOperacao={this.atualizaOperacao}
          calcular={this.calcular} 
        />
      </View>
    );
  }
}
