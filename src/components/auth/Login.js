import React, { Component } from 'react';

class LogIn extends Component {
    state = {
      email: '',
      password: ''
    }

    handleChange = (event) => {
      this.setState({
        [event.target.id]:
        e.target.value
      })
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    }
  
  render() {
    return (
      <div style={{marginTop: 50, marginLeft: 40}} className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <input
                  type='email'
                  id='username'
                  placeholder='username or email'
                  onChange={this.handleChange} />
                <input
                  type='password'
                  id='password'
                  placeholder='password'
                  onChange={this.handleChange} />
                <button type='submit'>Log In</button>
              </form>
            </div>
            <div className="card-action">
              <a href="#/routes">browse maps</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;