import React from 'react';

class OneClass extends React.Component {
    state = {
        classSkills : []
    }

    componentDidMount = () => {
        fetch(`/classes/${this.props.classdetails._id}`).then(response => response.json())
            .then(json => {
                this.setState({
                    classSkills : json.skills
                })
            })
        }

        render () {
            let mappedskills = []
            for (let ele in this.state.classSkills) {
                mappedskills.push(<ul><li>{this.state.classSkills[ele]}</li></ul>)
            }
        // console.log(`mappedskills: ${mappedskills}`)
        console.log(this.state.classSkills)
        console.log(mappedskills)
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