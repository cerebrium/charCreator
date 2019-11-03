import React from 'react';
import OneClass from './OneClass';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Classes extends React.Component{
    
    state = {
        selectedClass : 0
    }
    
    render() {
        const mappedClasses = this.props.charClasses.map((ele, id) => <Router><p key={id} >Class Name: {ele.name} <button>
                                                                        <Link to={`${ele._id}`}>More Info</Link>
                                                                        </button></p></Router>)
        return (
            <>
                <h1>Welcome to your class creater!</h1>
                <div className="App">
                    {`${mappedClasses} is  a`}
                </div>
            </>
        )
    }
}

export default Classes;