import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      queryResult: ''
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, queryResult } = steps;
    this.state.queryResult = 'Welcome';
    this.setState({ 
      name, 
      queryResult: 'Welcome'});
  }

  render() {
    const { name, queryResult } = this.state;
    return (
      <div style={{ width: '100%' }}>
        
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>QResult</td>
              <td>{queryResult}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;

