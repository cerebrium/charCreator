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
    const mappedClasses = this.state.charClasses.map(ele => <p>{ele}</p>)
    return(
      <div className="App">
       
      </div>
    );  
  }
}

export default App;
