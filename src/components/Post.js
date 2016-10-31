import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as PostActions from '../actions/postActions';

class Post extends React.Component {
  componentDidMount() {
    const id = this.props.post.id;
    this.props.showPost(id);
  }
  render() {
    return (
          <div className="panel panel-default">
            <div className="panel-heading">{this.props.post.title}</div>
            <div className="panel-body">{this.props.post.body}</div>
            <div className="panel-footer">{this.props.post.username}</div>
          </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  showPost: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { post: state.post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
