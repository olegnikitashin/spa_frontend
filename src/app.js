import React, { Component } from 'react';
import Post from './Post';
import PostForm from './PostForm';

export default class App extends Component {
  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <Post key={post.id} id={post.id} name={post.name} description={post.description} />
      );
    });
  }
  render() {
    return (
      <div>
        <div>
          {this.renderPosts()}
        </div>
        <PostForm />
      </div>
    );
  }
}
