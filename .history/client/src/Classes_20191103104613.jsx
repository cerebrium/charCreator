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
    
    handleOnClick = (event) => {
        this.setState({
            selectedClass : event.target.id
        })
        <Router>

            console.log(this.state.selectedClass)
        </Router>
    }
    
    render() {
        const mappedClasses = this.props.charClasses.map((ele, id) => <button type='text' key={id} id={ele._id} onClick={this.handleOnClick}>Class Name: {ele.name} </button>)
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