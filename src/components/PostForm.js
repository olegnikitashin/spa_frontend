import React, { Component, PropTypes } from 'react';

export default class PostForm extends Component {

  handleSubmit(e){
    e.preventDefault();
    let username = this.refs.username.value.trim();
    let title = this.refs.title.value.trim();
    let body = this.refs.body.value.trim();

    if (!username || !title || !body) {
      return;
    }

    let post = {
      username: username,
      title: title,
      body: body
    };
    // this.props.addPost({ username: username, title: title, body: body});
    this.props.addPost({post});
    this.refs.username.value = '';
    this.refs.title.value = '';
    this.refs.body.value = '';
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form className="postForm" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Username"
                ref="username"
              />
            </div>
            <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Title"
                ref="title"
              />
            </div>
            <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Body"
                ref="body"
              />
            </div>
            <input
              type="submit"
              className="btn btn-default"
              value="Add post"
            />
          </form>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};
