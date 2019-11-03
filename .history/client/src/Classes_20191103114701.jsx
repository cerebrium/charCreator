import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import OneClass from './OneClass';

class Classes extends React.Component{
    
    state = {
        selectedClass : 0,
        classdetails : []
    }

    
    handleOnClick = (event) => {
        this.setState({
            
        })
        if (this.state.selectedClass) {
            fetch(`/classes/${this.state.selectedClass}`).then(response => response.json())
                .then(json => {
                    this.setState({
                    classdetails : json,
                    })
                })
        }
        console.log(this.state.selectedClass)
        console.log(this.state.classdetails)
    }
    
    render() {
        const mappedClasses = this.props.charClasses.map((ele, id) => <button type='text' key={id} id={ele._id} classdeets={ele} onClick={this.handleOnClick}>Select Class {ele.name}</button>)
        return (
            <Router>
                <>
                    <h1>Welcome to your class creater!</h1>
                    <div className="App">
                        {mappedClasses}
                    </div>
                    <br />
                    <Link to={`/classes/${this.state.selectedClass}`}>Get Details About Selected Class</Link>
                    <Route path={`/classes/${this.state.selectedClass}`} render={ () => <OneClass classId={this.state.selectedClass}/> } />
                </>
            </Router>
        )
    }
}

export default Classes;