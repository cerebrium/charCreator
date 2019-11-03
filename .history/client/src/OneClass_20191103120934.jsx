import React from 'react';

class OneClass extends React.Component {
    mappedskills = this.props.classdetails.skills.map((ele, id) => <ul key={id}><li>{ele}</li></ul>)
    render () {
        return (
            <>      
                <h1>More Details about class:</h1>
                <ul>
                    <li>class: {this.props.classdetails.name}</li>
                    <li>skills: {this.mappedskills}</li>
                    <li>faction: {this.props.classdetails.faction}</li>
                </ul>
            </>
        )
    }
}

export default OneClass;