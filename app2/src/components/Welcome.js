import React, {Component} from 'react';

//This is a class component
/**
 * 1. More feature reach over functional component
 * 2. Maintains their own private data - state
 * 3. Complex UI logic
 * 4.Provide lifecycle hooks
 * 
 */

class Welcome extends Component {
    render() {
        return <h1>{this.props.name} {this.props.fuelType}</h1>  
    }
}

export default Welcome;