import React from 'react';
import './App.css';
import './Nav.css';
import Jane from './jane';
import John from './john';
import john from './img/john.jpg';
import jane from './img/jane.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ChatFeed from './components/ChatFeed';

class Nav extends React.Component {
  render(){
    return(
      <div className="navWindow">
        <div className="loginCard">
          <img className="profile-picture" src={john} alt="John picture"/>
          <Link to="/John">Login as John</Link>
        </div>
        <div className="loginCard">
          <img className="profile-picture" src={jane} alt="Jane picture"/>
          <Link to="/Jane">Login as Jane</Link>
        </div>
      </div>
    )
  }
}


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/John">
          <John />
        </Route>
        <Route path="/Jane">
          <Jane />
        </Route>
        <Route path="/">
          <Nav />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
