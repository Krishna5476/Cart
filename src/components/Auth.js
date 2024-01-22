import React from "react";
import "./Auth.css";
import { autchActions } from "../store/Auth-slice";
import { useDispatch } from "react-redux";

function Auth() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(autchActions.login());
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input id="id" type="text"></input>
        <label htmlFor="password">Password</label>
        <input id="password"></input>
        <button className="login-btn " type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Auth;
