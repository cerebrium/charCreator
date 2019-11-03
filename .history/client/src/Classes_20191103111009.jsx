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
                                                                        <Link to={`/oneclass/${ele._id}`}>More Info</Link>
                                                                        <Route path={`/oneclass/${ele._id}`} Render={ () => <OneClass currentId={this.state.selectedClass}/>} />
                                                                        </button></p></Router>)
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