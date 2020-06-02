import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class GetQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: '',
      requestBody: {
        query: '',
        languageCode: ''
      },
      responseBody: {
        queryResult: '',
        endConversation: ''
      }
      
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    const { requestBody, responseBody } = steps;
    //console.log('inputText', inputText.value);
    axios.get('http://localhost:9091/chatbot/v3/getwelcomemsg/en-US')
            .then(response => {
                //this.state.queryResult = response.data.queryResult;
                this.setState({
                    sessionId: response.data.sessionId,
                    requestBody, 
                    responseBody: {
                      queryResult: response.data.queryResult,
                      endConversation: response.data.endConversation
                    }
                });
            })
            .catch(error => {
                console.log(error);
            })
    
  }

  render() {
    const { sessionId, requestBody, responseBody } = this.state;
    //console.log("state in GetQuery", this.state);
    if(responseBody.queryResult == '') {
        return <p>loading...</p>
    }
    return (
      <div id={sessionId} style={{ width: '100%' }}>
        {responseBody.queryResult}
        
      </div>
    );
  }
}

GetQuery.propTypes = {
  steps: PropTypes.object,
};

GetQuery.defaultProps = {
  steps: undefined,
};

export default GetQuery;

