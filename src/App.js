import React, { Component } from 'react';
import './App.css';
import Head from './components/head';
import Start from './components/Start';
import TextoArriba from './components/TextoArriba';
import Login from './components/Login';
import Home from './components/BackToHome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = [
  {
    path: "/start",
    component: Start,
  },
  {
    path: "/login",
    component: Login,
    /*routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]*/
  }
];

class App extends Component  {
    render() {
      return (
        <div className="App">
      
        <Head />
        <TextoArriba />
        <Start />
        <Login />
        <Home />
        
        </div>
      );
    }
  }


export default App;
