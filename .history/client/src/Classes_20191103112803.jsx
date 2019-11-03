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
        console.log(this.state.selectedClass)
    }
    
    render() {
        const mappedClasses = this.props.charClasses.map((ele, id) => <button type='text' key={id} id={ele._id} onClick={this.handleOnClick}>Select Class {ele.name}</button>)
        return (
            <Router>
                <>
                    <h1>Welcome to your class creater!</h1>
                    <div className="App">
                        {mappedClasses}
                    </div>
                    <Link to={`/classes/${this.state.selectedClass}`}>Go to Selected Class</Link>
                </>
            </Router>
        )
    }
}

export default Classes;