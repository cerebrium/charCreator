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
        const mappedClasses = this.props.charClasses.map((ele, id) => <p key={id} >Class Name: {ele}</p>)
        return (
            <>
                <h1>Welcome to your class creater!</h1>
                <div className="App">
                    {`${mappedClasses.name}`}
                </div>
            </>
        )
    }
}

export default Classes;