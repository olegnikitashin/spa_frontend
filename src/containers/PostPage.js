import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PostActions from '../actions/PostActions';
import NotFound from '../components/NotFound';
import Post from '../components/Post';

class PostPage extends React.Component {
  componentDidMount() {
    const id = this.props.params.id;
    this.props.showPost(id);
  }

  postExist() {
    const id = this.props.params.id;
    const posts = this.props.posts;
    return posts.find((item) => { return item.id == id; });
  }
  render() {
    const post = this.postExist();
    if (!post) return <NotFound/>;
      return <Post post={post}/>;
  }
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  showPost: PropTypes.func.isRequired,
  params: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { post: state.posts.post, posts: state.posts.posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
