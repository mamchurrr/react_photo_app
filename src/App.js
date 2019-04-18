import React, {Component} from 'react';
import Gallery from './components/pages/Gallery';
import Photo from './components/pages/Photo';
import './App.scss'

class App extends Component {
  
  render() {
    console.log("app render")
    return (
      <div className="App">
        <Gallery/>
        <Photo/>
      </div>
    );
  }
} 


export default App;
