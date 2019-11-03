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

    handleOnClick (event) {
        let routy = event.target.id
        <Router>
            <Link to='/'></Link>
        </Router>
    }
    
    render() {
        const mappedClasses = this.props.charClasses.map((ele, id) => <p key={ele._id} onClick={this.handleOnClick}>Class Name: {ele.name} </p>)
        return (
            <>
                <h1>Welcome to your class creater!</h1>
                <div className="App">
                    {mappedClasses}
                </div>
            </>
        )
    }
}

export default Classes;