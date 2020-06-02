import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatboxUI from './components/ChatboxUI'

//creating a context
const MyContext = React.createContext();

//crete a Provider component
class MyProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestBody: {
        query: '',
        sessionId: '',
        languageCode: ''
      },
      responseBody: {
        queryResult: '',
        endConversation: ''
      }
      
    };
  }

  render() {
    return (
      <MyContext.Provider value={{state: this.state}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


class App extends Component {

  render() {
    return (
        <div className="App">
          <ChatboxUI />
        </div>
    );
  }
  
}

export default App;


