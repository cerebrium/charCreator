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
      return(
        <Router>
          <>
            <nav><Link to='/classes'>Home</Link></nav>
            <Route exact path='/classes'
          </>
        </Router>
    );  
  }
}

export default App;
