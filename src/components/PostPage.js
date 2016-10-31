import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as PostActions from '../actions/postActions';

class PostPage extends React.Component {
  componentDidMount() {
    const id = this.props.post.id;
    this.props.showPost(id);
  }
  render() {
    const post = this.props.post;
    return (
          <div className="panel panel-default">
            <div className="panel-heading">{post.title}</div>
            <div className="panel-body">{post.body}</div>
            <div className="panel-footer">{post.username}</div>
          </div>
    );
  }
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
  showPost: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { post: state.post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
