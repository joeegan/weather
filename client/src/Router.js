import React from "react";
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import App from './App'
const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/today" component={Index} />
      <Route path="/yesterday" component={About} />
      <Route path="/year" component={Users} />
      <Route path="/all-time" component={Users} />
    </div>
  </Router>
);

export default AppRouter;