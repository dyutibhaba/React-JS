import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class PostQuery extends Component {
  constructor(props) {
    super(props);
    console.log(props.initialQry);
    this.state = {
        requestBody: {
          query: '',
          sessionId: '',
          languageCode: 'en-US'
        },
        responseBody: {
          queryResult: '',
          endConversation: ''
        }

      };
  }

  componentDidMount() {
    const { steps } = this.props;
    const { query, requestBody, responseBody } = steps;
    const data = {};
    if(this.props.initialQry != undefined) {
        this.state.requestBody.query = this.props.initialQry;
    } 
    else {
        this.state.requestBody.query = this.props.steps.query.value;
    }
    this.state.requestBody.sessionId = this.props.sessionId;
    //console.log('this.props', this.props);
    axios.post('http://localhost:9091/chatbot/v3/getqueryresponse', this.state.requestBody)
            .then(response => {
                //this.state.queryResult = response.data.queryResult;
                this.setState({ 
                    requestBody: {
                        sessionId: response.data.sessionId, 
                    },
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
    const { requestBody, responseBody } = this.state;
    //console.log('responseBody', responseBody)
    if(responseBody.queryResult == '') {
        return <p>loading...</p>
    }
    return (
      <div  style={{ width: '100%', fontFamily: 'cursive' }}>
        {responseBody.queryResult}
        
      </div>
    );
  }
}

PostQuery.propTypes = {
  steps: PropTypes.object,
};

PostQuery.defaultProps = {
  steps: undefined,
};

export default PostQuery;

