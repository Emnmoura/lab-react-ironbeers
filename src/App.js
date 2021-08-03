import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./Components/Home"
import BeerList from "./Components/BeerList"
import RandomBeer from "./Components/RandomBeer"
import { Switch, Route } from 'react-router';
import NewBeer from "./Components/NewBeer"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beerlist" component={BeerList}/>
          <Route exact path="/random-beer" component={RandomBeer}/>
          <Route exact path="/new-beer" component={NewBeer}/>
        </switch>      
      </BrowserRouter>
    </div>
  );
}
export default App;