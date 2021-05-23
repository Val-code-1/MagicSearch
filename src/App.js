import React from "react";
import Search from "./components/Search/Search";
import Placeholder from "./assets/placeholder.jpg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav id="nav">
          <p>
            <Link to="/Search">Search</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/users">Users</Link>
          </p>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <img src={Placeholder} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
