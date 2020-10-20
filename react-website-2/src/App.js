import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/navbar"
import Home from './components/pages/home';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/footer" component={Footer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
