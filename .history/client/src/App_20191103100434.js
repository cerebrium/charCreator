import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  state = {
    charClasses: []
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

    const mappedClasses = this.state.charClasses.map((ele, id) => <p key={id}>{ele.name}</p>)
    return(
        
      <>
        <h1>Welcome to your class creater!</h1>
        <div className="App">
          {mappedClasses}
        </div>
      </>
    );  
  }
}

export default App;
