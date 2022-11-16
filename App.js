import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import params from './src/parans';
import { createMinedBoard } from './src/functions';

import MinedField from './src/componets/MinedField';



export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmount()
    return Math.ceil(cols*rows*params.difficultLevel)
  }

  createState = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmount()

    return {
      board: createMinedBoard(rows, cols, this.minesAmount),
    }

  }

  render() {
    return (
      <SafeAreaView style = {styles.container}>
        <Text> Iniciando o Campo Minado</Text>
        <Text> Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <View style = {styles.board}>
          <MinedField board={this.state.board} />
        </View>
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent: 'flex-end',
  },

  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  }
})