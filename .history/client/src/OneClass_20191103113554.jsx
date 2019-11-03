import React from 'react';

class OneClass extends React.Component {
    console.log(this.props.classdetails)
    mappedClass = this.props.classdetails.map((ele, id) => <ul><li key={id}>{ele.name}</li><li>{ele.faction}</li><li>{ele.skills}</li></ul>)
    render () {
        return (
            <h1>More Details about class:</h1>
        )
    }
}

export default OneClass;