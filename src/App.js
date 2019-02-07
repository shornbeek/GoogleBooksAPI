import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Jumbo from './components/Jumbo';
import Search from './components/Search';
import Saved from './Pages/Saved';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Container from "../components/Container";



// import { Router } from "react-router-dom";


class App extends Component {
  render() {
    return (

      <Router>
      <div>
        <Nav />
        {/* <Header /> */}
        <Container/>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/saved" component={Saved}/>
        </Switch>
      </div>
    </Router>


      // <Router> 
//      <div>
//    <Nav/>
//    <Jumbo/>
//    <Search/>
// <p>Hello</p>

//        </div>
      // </Router>
    );
  }
}

export default App;
