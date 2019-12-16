import React from 'react';

class Register extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    motorcycleType: ''
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
                  <input
                  type='text'
                  id='firstName'
                  placeholder='First Name'
                  onChange={this.handleChange} />
                  <input
                  type='text'
                  id='lastName'
                  placeholder='Last Name'
                  onChange={this.handleChange} />
                  <input
                  type='text'
                  id='motorcycleType'
                  placeholder='What type of motorcycle do you ride?'
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

export default Register;