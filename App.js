import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component{
  render() {
    return (
      <Provider store={createStore(reducers)} >
        <View style={{ flex: 1 }}>
          <Header headerText="Employees"/>
          <LoginForm />
        </ View>
      </ Provider>
    );
  }
}

export default App;


