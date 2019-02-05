import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Jumbo from './components/Jumbo';
import Search from './components/Search';

// import { Router } from "react-router-dom";


class App extends Component {
  render() {
    return (
      // <Router> 
     <div>
   <Nav/>
   <Jumbo/>
   <Search/>
<p>Hello</p>

       </div>
      // </Router>
    );
  }
}

export default App;
