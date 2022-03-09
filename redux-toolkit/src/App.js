import React from 'react';
import { Provider } from 'react-redux';
import store from './utils/readux/store';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Card from './components/Card/Card';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Header />
          <Form />
          <Card />
          </div>
          </Provider>
  );
}

export default App;
