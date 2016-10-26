import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import * as PostActions from '../actions/PostActions'
import 'whatwg-fetch'


class App extends Component {

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
              <button type="button" className="btn btn-success navbar-btn" onClick={this.addPost}>Test!</button>
              <br />
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

//
const mapStateToProps = (state) => ({
  state
})

function mapDispatchToProps(dispatch) {
  return {
    PostActions: bindActionCreators(PostActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//
