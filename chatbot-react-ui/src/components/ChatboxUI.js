import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';
import update from 'immutability-helper';
import GetQuery from './GetQuery';
import PostQuery from './PostQuery';

let uuId = getUUID();
console.log(uuId);
function getUUID() { 

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { 
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); 
        return v.toString(16); 
       }); 
    //console.log(uuidv4())
    }

let conv = [
    //{id: "welcome", message: 'Hi welcome, I can help you to get a heating system quote.', trigger: "query"},
    {id: "welcome", component: <PostQuery sessionId={uuId} initialQry="hi"/>, asMessage: true, trigger: "query"},
    {id: "query", user: true, trigger: "update"},
    {id: "update", component: <PostQuery sessionId={uuId}/>, asMessage: true, trigger: "query"}

];



class ChatboxUI extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            conv
        }
    }

    render() {
        
        const { conv, sessionId } = this.state
        console.log("state in render:", this.state)
        return (
            <ChatBot 
                steps={conv}
            />
        );
    }
}

export default ChatboxUI
