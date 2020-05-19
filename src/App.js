import React, {Component} from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar"
import Default from "./components/Default"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart/Cart"
import Details from "./components/Details"
import Modal from "./components/modal"

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
          <Switch>
            <Route exact path="/"><ProductList/></Route>
            <Route path="/details"><Details/></Route>
            <Route path="/cart" ><Cart/></Route>
            <Route ><Default/></Route>
          </Switch>
        <Modal/>
      </React.Fragment>

    )
  }
}

export default App;
