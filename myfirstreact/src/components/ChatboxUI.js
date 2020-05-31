import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot';
import Review from './Review';
import axios from 'axios';
import Greet from './Greet';
import update from 'immutability-helper';



class ChatboxUI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            conv: [{
                id: '1',
                message: 'What is your name?',
                trigger: 'name'
            },
            {
                id: 'name',
                user: true,
                trigger: '',
            }]
        }
    }

    componentWillMount() {
        console.log('componentWillMount start...');
        const { steps } = this.props;

        axios.get('http://localhost:9091/chatbot/v3/getwelcomemsg/en-US')
            .then(response => {
                let convArray = [];
                let nextStep = {
                    id: '2',
                    message: '',
                    trigger: '3',
                }
                convArray = this.state.conv;
                (convArray[convArray.length - 1]).trigger = '2';
                console.log('convArray', convArray);
                nextStep.message = response.data.queryResult;
                //convArray.push(nextStep)
                const newArray = update(convArray, { $push: [nextStep] });
                this.setState({
                    this.state.conv: newArray
                })
            })
            .catch(error => {
                console.log(error);
            })
        console.log('componentWillMount end...');
    }


    render() {
        console.log("render called..")
        const { conv } = this.state


        return (
            <ChatBot
                steps={conv}
            />
        );
    }
}

export default ChatboxUI
