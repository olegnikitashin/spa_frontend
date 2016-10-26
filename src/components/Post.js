import React, { PropTypes, Component } from 'react';

export default class Post extends Component {
  render() {
    return (
          <div className="panel panel-default">
            <div className="panel-heading">{this.props.title}</div>
            <div className="panel-body">{this.props.body}</div>
            <div className="panel-footer">{this.props.username}</div>
          </div>
    );
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  username: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string,
};
