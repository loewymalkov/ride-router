import React from 'react';
import RouteList from './routes/RouteList';
import NewRoute from './routes/NewRoute';
import Login from './auth/Login';
import Header from './layout/Header';
import User from './auth/User';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      masterRouteList: [],
      masterUserList: []
    };
    this.handleRouteSubmission = this.handleRouteSubmission.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleRouteSubmission(newRoute) {
    var newMasterRouteList = this.state.masterRouteList.slice();
    newMasterRouteList.push(newRoute);
    this.setState({ masterRouteList: newMasterRouteList });
  }

  handleRatingClick(index) {
    var newMasterRouteList = this.state.masterRouteList.slice();
    newMasterRouteList[index].rating ++;
    this.setState({ masterRouteList: newMasterRouteList });
  }

  handleLogIn(newUser) {
    var newMasterUserList = this.state.masterUserList.slice();
    newMasterUserList.push(newUser);
    this.setState({ masterUserList: newMasterUserList });
  }

  render() {
    return (
      <div>
        <style global jsx>{`
        body {
          background-color: #EAF2F8
        }
      `}</style>
        <Header/>
        <Switch>
          <Route exact path="/" render={() => <Login onLogIn={this.handleLogIn} /> }/>
          <Route exact path="/routes" render={() => <RouteList routeList={this.state.masterRouteList} onRate={this.handleRatingClick} /> }/>
          <Route exact path="/newroute" render={() => <NewRoute onNewRouteCreation={this.handleRouteSubmission} /> }/>
          <Route exact path="/user" render={() => <User userList={this.state.masterUserList}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;