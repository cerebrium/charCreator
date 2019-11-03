import React from 'react';
import './App.css';

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
      <div>
      <div className="App">
        s{mappedClasses}
      </div>
      </div>

    );  
  }
}

export default App;
