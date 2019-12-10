import React from 'react';
import RouteList from './RouteList';
import NewRoute from './NewRoute';
import Login from './Login';
import Header from './Header';
import User from './User';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      masterRouteList: []
    };
    this.handleRouteSubmission = this.handleRouteSubmission.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
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
    console.log(newMasterRouteList[index], 'index');
  }

  render() {
    return (
      <div style={{background: ''}}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/routes" render={() => <RouteList routeList={this.state.masterRouteList} onRate={this.handleRatingClick} /> }/>
          <Route exact path="/newroute" render={() => <NewRoute onNewRouteCreation={this.handleRouteSubmission} /> }/>
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;