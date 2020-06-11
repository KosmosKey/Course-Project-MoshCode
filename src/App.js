import React, { Component } from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Costumers from "./components/RoutePaths/Costumers";
import Rentals from "./components/RoutePaths/Rentals";
import NotFound from "./components/RoutePaths/NotFound";
import MovieForm from "./components/MovieForm";
import Movies from "./components/Movies";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import FormMovies from "./components/FormMovies";
export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3>Navigation bar</h3>
          <div className="collapse navbar-collapse p-3" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">
                Movies
              </NavLink>
              <NavLink className="nav-link" to="/costumer">
                Costumer
              </NavLink>
              <NavLink className="nav-link" to="/rentals">
                Rentals
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/movies/new" component={FormMovies} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/costumer" component={Costumers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Movies} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
