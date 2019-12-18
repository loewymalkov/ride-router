import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newRoute } from '../../store/actions/routeActions';
import { Redirect } from 'react-router-dom';

class NewRoute extends Component {
  state = {
    title:'',
    routeInfo:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newRoute(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;
      if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container" style={{margin: 100}}>
        <div className="card trans-box">
          <div className="card-image">
            <span className="card-title trans-text">Upload Map</span>
          </div>
          <div className="card-content">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="title">What do you want to call this map?</label>
              <input type="text" id='title' onChange={this.handleChange} /> 
              <label htmlFor="routeInfo">Add your google map url</label>
              <textarea
                id='routeInfo'
                onChange={this.handleChange} />
              <button type='submit' className="material-icons" style={{backgroundColor: '#26C6DA'}} >motorcycle</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newRoute: (route) => dispatch(newRoute(route))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRoute);