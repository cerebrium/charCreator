import React from 'react';

class OneClass extends React.Component {
    mappedskills = this.props.classdetails.skill.map((ele, id) => <ul key={id}><li>{ele}</li></ul>)
    render () {
        return (
            <>      
                <h1>More Details about class:</h1>
                <ul>
                    <li>class: {this.props.classdetails.name}</li>
                    <li>class: {this.mappedskills}</li>
                    <li>class: {this.props.classdetails.faction}</li>
                </ul>
            </>
        )
    }
}

export default OneClass;