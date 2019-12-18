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
     <div className="container">
      <form style={{ background: 'rgba(255, 255, 255, 0.6)'}}onSubmit={this.handleSubmit}>
        <h5 className="grey-text text-darken-3" style={{marginBottom: 20}}>Upload a map</h5>
        <label htmlFor="title">What do you want to name this map?</label>
        <input type="text" id='title' onChange={this.handleChange} /> 
        <label htmlFor="routeInfo">Add your google map url</label>
        <textarea
          id='routeInfo'
          onChange={this.handleChange} />
        <button type='submit' className="material-icons" style={{backgroundColor: '#26C6DA'}} >motorcycle</button>
      </form>
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