import React from 'react';
import './App.css';

class App extends React.Component() {
  state = {
    charClasses
  }

  componentDidMount = () => {
    fetch('/classes').then(response => response.json())
    .then(json => {
      this.setState({
        charClasses : json
      })
    })
  }

  render () {
    return(
      <div className="App">
       
      </div>
    );  
  }
}

export default App;
