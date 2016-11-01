import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PostActions from '../actions/PostActions';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import 'whatwg-fetch';

class PostsPage extends React.Component {
  render() {
    const { posts } = this.props;
    const { getPosts, deletePost, addPost, disableBtn, enableBtn, disabled } = this.props.PostActions;
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <PostList posts={posts} getPosts={getPosts} deletePost={deletePost}/>
          <PostForm addPost={addPost} disableBtn={disableBtn} enableBtn={enableBtn} disabled={disabled}/>
        </div>
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
  return { posts: state.posts, disabled: state.postForm.disabled};
}

function mapDispatchToProps(dispatch) {
  return {
    PostActions: bindActionCreators(PostActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
