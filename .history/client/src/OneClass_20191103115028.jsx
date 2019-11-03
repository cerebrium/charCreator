import React from 'react';

class OneClass extends React.Component {
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