import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import List from '../List/List';
import Header from '../Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />

      </div>
    );
  }
}

export default App;
