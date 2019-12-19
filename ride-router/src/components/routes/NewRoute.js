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
        <h5 >Upload a map</h5>
        <div className="input-field">
          <label className="grey-text text-darken-2" htmlFor="title">What do you want to name this map?</label>
          <input 
          type="text" 
          id='title' 
          onChange={this.handleChange} /> 
        </div>
        <div className="input-field">
          <label className="grey-text text-darken-2"htmlFor="routeInfo">Add your google map url</label>
          <input
            type="text" 
            id='routeInfo'
            onChange={this.handleChange} />
        </div>
        <div className="input-field white-text">
        <button type='submit' className=" material-icons" style={{backgroundColor: 'rgba(0, 230, 226, 0.51)', color: 'white', fontSize: 35}} >motorcycle</button>
        </div>
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