import React, { Component } from 'react'
import Play from './Play';

let list = [1, 2, 3];

class PlayIntArray extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list
        };
    }

    onClearArray = () => {
        this.setState({list: []});
    };

    onResetArray = () => {
        this.setState({list});
    };

    componentWillMount = () => {
        setTimeout(() => {
            console.log('This will run after 1 second!')
            list.push(list[list.length - 1] + 1)
            console.log(list);
            this.setState({list});
          }, 3000);


        
    };
    
    
    render() {
        const {list} = this.state; 
        console.log("list in render: ", list);
        return (
            
            <Play conv={list}></Play>
            
        )
    }
}

export default PlayIntArray
