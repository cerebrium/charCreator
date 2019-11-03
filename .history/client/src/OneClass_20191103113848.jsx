import React from 'react';

class OneClass extends React.Component {
    
    componentDidMount = () => {
        fetch('/classes').then(response => response.json())
        .then(json => {
            this.setState({
            charClasses : json
            })
        })
    }
    // mappedClass = this.props.classdetails.map((ele, id) => <ul><li key={id}>{ele.name}</li><li>{ele.faction}</li><li>{ele.skills}</li></ul>)
    render () {
        console.log(this.props.classdetails)
        return (
            <>      
                <h1>More Details about class:</h1>
            </>
        )
    }
}

export default OneClass;