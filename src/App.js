import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss'

class App extends Component {
  
  render() {
    console.log("app render")
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
            <Router/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
} 


export default App;
