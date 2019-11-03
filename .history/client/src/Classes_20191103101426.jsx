import React from 'react';

class Classes extends React.Component{
    render() {
        const mappedClasses = this.props.charClasses.map((ele, id) => <p key={id}>Class Name: {ele.name}</p>)
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