import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('state value after callback', this.state.count)
        })
        //this.state.count = this.state.count + 1
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
                <button onClick={()=>this.incrementCount()}>Increment</button>
            </div>
        )
    }
}

export default Counter
