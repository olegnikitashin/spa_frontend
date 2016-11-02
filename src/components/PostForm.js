import React, { Component, PropTypes } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentDidMount() {
    this._submit.disabled = true;
  }

  handleSubmit(e){
    e.preventDefault();
    const username = this.refs.username.value.trim();
    const title = this.refs.title.value.trim();
    const body = this.refs.body.value.trim();

    if (!username || !title || !body) {
      return;
    }

    const post = {
      username: username,
      title: title,
      body: body
    };

    this.props.addPost({post});
    this.refs.username.value = '';
    this.refs.title.value = '';
    this.refs.body.value = '';
    this._submit.disabled = true;
  }

  handleChangeInput() {
    this._submit.disabled = !(this.refs.username.value.trim() && this.refs.title.value.trim() && this.refs.body.value.trim());
  }

  render() {
    return (
      <div>
        <form className="postForm" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Username"
              ref="username"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Title"
              ref="title"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Body"
              ref="body"
              onChange={this.handleChangeInput}
            />
          </div>
          <input
            type="submit"
            className="btn btn-default"
            value="Add post"
            ref={(ref) => this._submit = ref}
          />
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};
