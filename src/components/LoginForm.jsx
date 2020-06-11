import React from "react";
import FormJS from "./FormJS";

class LoginForm extends FormJS {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
