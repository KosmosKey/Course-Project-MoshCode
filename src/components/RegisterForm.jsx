import React from "react";
import FormJS from "./FormJS";
import Joi from "joi-browser";
export class RegisterForm extends FormJS {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().min(5).label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "Password")}
        {this.renderInput("name", "Name")}
        {this.renderButton("Register")}
      </div>
    );
  }
}

export default RegisterForm;
