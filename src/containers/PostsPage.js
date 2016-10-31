import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PostActions from '../actions/postActions';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import 'whatwg-fetch';

class PostsPage extends React.Component {
  render() {
    const { posts } = this.props;
    const { getPosts, deletePost, addPost } = this.props.PostActions;
    return(
      <div>
        <PostList posts={posts} getPosts={getPosts} deletePost={deletePost}/>
        <PostForm addPost={addPost}/>
      </div>
    );
  }
}

PostsPage.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  PostActions: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return {
    PostActions: bindActionCreators(PostActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
