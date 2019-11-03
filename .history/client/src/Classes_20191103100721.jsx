import React from 'react';

class Classes extends React.Component{
    render() {
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