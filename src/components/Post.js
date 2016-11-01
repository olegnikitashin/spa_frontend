import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Post extends React.Component {

  render() {
    const post = this.props.post;

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <div className="panel-heading">{post.title}</div>
            <div className="panel-body">{post.body}</div>
            <div className="panel-footer">{post.username}</div>
          </div>
          <div className="col-md-3 col-md-offset-5">
            <Link to="/posts">Back</Link>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
