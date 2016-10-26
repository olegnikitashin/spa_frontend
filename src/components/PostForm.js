import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      title: '',
      body: ''
    };
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  handleTestClick() {
    this.props.onTestClick(this.state)
  }

  sendPost(post){

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

    fetch(process.env.BACKEND_SERVER.trimRight('/') + '/api/posts', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(post)
    })
    .then(status)
    .then(json)
    .then(response => {
      this.props.onPostSubmit(post);
      this.setState({username: '', title: '', body: ''})
    })
    .catch(error => {
      console.log('Request failed', error);
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let username = this.state.username.trim();
    let title = this.state.title.trim();
    let body = this.state.body.trim();

    if (!username || !title || !body) {
      return;
    }

    let post = {
      username: username,
      title: title,
      body: body
    }

  this.sendPost(post)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form className="postForm" onSubmit={::this.handleSubmit}>
            <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={::this.handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={::this.handleTitleChange}
              />
            </div>
            <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Body"
                value={this.state.body}
                onChange={::this.handleBodyChange}
              />
            </div>
            <input
              type="submit"
              className="btn btn-default"
              value="Add post"
            />
            <button type="button" className="btn btn-success navbar-btn" onClick={::this.handleTestClick}>Test!</button>
            <br />
          </form>
        </div>
      </div>
    );
  }
}
