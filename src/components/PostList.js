import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as postActions from '../actions/PostActions';
import { bindActionCreators } from 'redux';

class PostList extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeletePost = this.handleDeletePost.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  handleDeletePost(id) {
    this.props.deletePost(id);
  }
  //
  render() {
    const postItems = this.props.posts.posts.map(postItem =>{
      return (
        <div className="panel panel-default" key={postItem.id}>
            <div className="panel-heading">
              <Link to={"/posts/" + postItem.id}>
                {postItem.title}
              </Link>
            </div>
            <div className="panel-body">
              {postItem.body}
            </div>
            <div className="panel-footer">
              {postItem.username}
            </div>
            <button className="btn btn-danger btn-xs" onClick={() => this.handleDeletePost(postItem.id)}>
              Delete # {postItem.id}
            </button>
        </div>
      );
    });
    return (
      <div>
        {postItems}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired
};

export default PostList;
