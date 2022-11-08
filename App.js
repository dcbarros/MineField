import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import params from './src/parans';
import Field from './src/componets/Field'

export default class App extends Component {
    render() {
        return (
          <SafeAreaView style = {styles.container}>
            <Text> Iniciando o Campo Minado</Text>
            <Text> Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
            <Field />
            <Field opened/>
            <Field opened nearMines = {1}/>
            <Field mined/>
            <Field mined opened/>
            <Field mined opened exploded/>
            <Field flagged/>
            <Field flagged opened/>
          </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
})