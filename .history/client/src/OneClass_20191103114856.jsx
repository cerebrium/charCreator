import React from 'react';

class OneClass extends React.Component {


    mappedClass = this.props.classdetails.map((ele, id) => <ul><li key={id}>{ele.name}</li><li>{ele.faction}</li><li>{ele.skills}</li></ul>)
    render () {
        console.log(this.props.charClass)
        return (
            <>      
                <h1>More Details about class:</h1>
                {this.mappedClass}
            </>
        )
    }
}

export default OneClass;