import React from 'react';
import Menu from './Menu';
import Form from './Form'

const App = () => {
    return (
      <div className="App">
        <Menu />
        <h1>Hello, user</h1>
        <Form/>
      </div>
    );
}

export default App;
