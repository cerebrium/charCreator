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
        classdetails : null
    }

    
    handleOnClick = (event) => {
        this.setState({
            selectedClass : event.target.id
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
                    <h2>current Classes</h2>
                        <div className="App">
                            {mappedClasses}
                        </div>
                    <br />
                    <h2>Make a new class</h2> 
                        <form action="/classes" method='POST'>
                            <input type="text" name='name' placeholder='name of char'/>
                            <input type="text" name='faction' placeholder='faction'/>
                            <input type="text" name='class' placeholder='class'/>

                            <input type='submit' value='Submit'/>
                        </form>
                    <br />
                    <Link to={`/classes/${this.state.selectedClass}`}>Get Details About Selected Class</Link>
                    <Route path={`/classes/${this.state.selectedClass}`} render={ () => <OneClass classdetails={this.state.classdetails}/> } />
                </>
            </Router>
        )
    }
}

export default Classes;