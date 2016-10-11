import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.description}</div>
      </div>
    );
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};
