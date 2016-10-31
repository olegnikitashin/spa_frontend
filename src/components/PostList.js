import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as PostActions from '../actions/postActions';
import { bindActionCreators } from 'redux';

class PostList extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeletePost = this.handleDeletePost.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  // deletePost(event) {
  //   this.props.deletePost(this.state.postItem.id)
  // }

  handleDeletePost(id) {
    console.log(id);
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
            <button onClick={() => this.handleDeletePost(postItem.id)}>
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

// function mapStateToProps (state) {
//   return {
//     posts: state.posts
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     postActions: bindActionCreators(PostActions, dispatch)
//   };
// }

export default PostList;
// export default connect(mapStateToProps, mapDispatchToProps)(PostList);
