import React from 'react';
import './App.css';

class App extends React.Component() {
  state = {
    charClasses
  }

  componentDidMount = () => {
    fetch('/charClasses')
  }

  render () {
    return(
      <div className="App">
       
      </div>
    );  
  }
}

export default App;
