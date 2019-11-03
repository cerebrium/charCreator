import React from 'react';

class OneClass extends React.Component {
    mappedClass = this.props.classdetails.map((ele, id) => <ul><li key={id}>{ele.name}</li></ul>)
    render () {
        return (
            <h1>More Details about class:</h1>
        )
    }
}

export default OneClass;