import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            Page is not found! Go <Link to="/">back</Link>?
          </div>
        </div>
      </div>
    );
  }
}
