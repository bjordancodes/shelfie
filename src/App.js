import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Product from './component/Product/Product';

class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: []
    }
  }
  // get inventory from database

  
  render() {
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Dashboard><Product/></Dashboard>
      </div>
    );
  }
}

export default App;
