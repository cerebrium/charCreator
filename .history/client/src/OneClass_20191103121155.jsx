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
                <h2>Update skills</h2>
                <form action="/classes" method='POST'>
                    <input type="text" name='name' placeholder='name of char'/>
                    <input type="text" name='faction' placeholder='faction'/>
                    <input type="text" name='class' placeholder='class'/>

                    <input type='submit' value='Submit'/>
                </form>
            </>
        )
    }
}

export default OneClass;