import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg : {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9091/chatbot/v3/getwelcomemsg/en-US')
        .then(response => {
            console.log(response);
            this.setState({
                msg : response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    

    render() {
        const { msg } = this.state
        return (
            <div>
                <p>Welcome To HSC</p>
                {
                    msg !== null ? msg.queryResult : null
                }
            </div>
        )
    }
}

export default PostList
