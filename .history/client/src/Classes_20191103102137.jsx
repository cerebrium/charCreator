import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Classes extends React.Component{

    state = {
        selectedClass : Number
    }

    handleOnClick () {

    }
    
    render() {
        const mappedClasses = this.props.charClasses.map((ele, id) => <p key={id} onClick={this.handleOnClick}>Class Name: {ele.name}</p>)
        return (
            <Router>
                <>
                    <h1>Welcome to your class creater!</h1>
                    <div className="App">
                        {mappedClasses}
                    </div>
                </>
            </Router>
        )
    }
}

export default Classes;