import React from 'react';

class OneClass extends React.Component {
    state = {
        classSkills : []
    }

    componentDidMount = () => {
        fetch(`/skills/${this.props.classdetails._id}`).then(response => response.json())
            .then(json => {
                this.setState({
                    classSkills : json,
                })
            })
        }

    render () {

        // const mappedskills = this.state.classSkills.map((ele, id) => <ul key={id}><li>{ele}</li></ul>)
        // console.log(`mappedskills: ${mappedskills}`)
        return (
            <>      
                <h1>More Details about class:</h1>
                <ul>
                    <li>class: {this.props.classdetails.name}</li>
                    {/* <li>skills: {mappedskills}</li> */}
                    <li>faction: {this.props.classdetails.faction}</li>
                </ul>
                <h2>Add skills</h2>
                <form action={`/classes/${this.props.classdetails._id}/skills`} method='POST'>
                    <input type="text" name='name' placeholder='name of skill'/>
                    <input type="text" name='damage' placeholder='damage'/>
                    <input type="text" name='healing' placeholder='healing'/>
                    <input type="text" name='type' placeholder='type'/>

                    <input type='submit' value='Submit'/>
                </form>
            </>
        )
    }
}

export default OneClass;