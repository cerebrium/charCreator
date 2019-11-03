import React from 'react';
import './App.css';

class App extends React.Component() {
  state = {
    charClasses
  }

  componentDidMount = () => {
    fetch('/classes')
  }

  render () {
    return(
      <div className="App">
       
      </div>
    );  
  }
}

export default App;
