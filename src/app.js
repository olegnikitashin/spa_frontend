import React, { Component } from 'react';
import Post from './Post';
import PostForm from './PostForm';
import 'whatwg-fetch'


export default class App extends Component {

  loadPostsFromServer() {

    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }

    function json(response) {
      return response.json()
    }

    fetch('http://46.101.105.76/api/posts')
    .then(status)
    .then(json)
    .then(response => {
      this.setState({posts: response})
    })
  }

  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer.bind(this), this.props.pollInterval);
  }

  handlePostSubmit() {
    this.loadPostsFromServer();
  }

  render() {
    return (
      <div className="container">
        <div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              {this.state && this.state.posts.map(post => {
                return (
                  <Post key={post.id} id={post.id} title={post.title} username={post.username} body={post.body} />
              )}
              )}
            </div>
          </div>
        </div>
        <PostForm onPostSubmit={this.handlePostSubmit.bind(this)} />
      </div>
    );
  }
}
