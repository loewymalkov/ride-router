import React from 'react';
import RouteList from './RouteList';
import NewRoute from './NewRoute';
import Login from './Login';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterRouteList: [],
    };
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/routes" component={RouteList} />
          <Route exact path="/newroute" component={NewRoute} />
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;