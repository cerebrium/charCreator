import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Classes extends React.Component{
    
    state = {
        selectedClass : 0
    }
    
    // handleOnClick = (event) => {
    //     this.setState({
    //         selectedClass : event.target.id
    //     })
    // }
    
    render() {
        const mappedClasses = this.props.charClasses.map((ele, id) => <Router><p key={id} id={ele._id} >Class Name: {ele.name} <button><Link to='/'>More Info</Link><Route exact path=</button></p></Router>)
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