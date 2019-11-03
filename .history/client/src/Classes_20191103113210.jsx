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
        classDetails : null,
    }
    
    handleOnClick = (event) => {
        this.setState({
            selectedClass : event.target.id,
            classDetails : event.target.classdeets
        })
        console.log(this.state.selectedClass)
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