import React, { Component, PropTypes } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.submitDisabled = this.submitDisabled.bind(this);
  }

  componentDidMount() {
    this.props.disableBtn;
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
  }

  submitDisabled() {
    const username = this.refs.username.value.trim();
    const title = this.refs.title.value.trim();
    const body = this.refs.body.value.trim();
    if (!username || !title || !body) {
      this.props.disableBtn;
    } else {
      this.props.enableBtn;
    }
  }

  render() {
    const { disabled } = this.props;

    return (
      <div>
        <form className="postForm" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Username"
              ref="username"
              onChange={this.submitDisabled}
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Title"
              ref="title"
              onChange={this.submitDisabled}
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Body"
              ref="body"
              onChange={this.submitDisabled}
            />
          </div>
          <input
            type="submit"
            className="btn btn-default"
            value="Add post"
            disabled={disabled}
          />
          <input
            type="submit"
            className="btn btn-default"
            value="Add post"
            disabled
          />
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};
