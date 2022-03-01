import React from "react";

function Login() {
  return (
    <div className="login">
  <form method="POST">
    <link rel="stylesheet" type="text/css" href="{{ url_for('static',filename='login.css') }}" />
    <h3 align="center">Login</h3>
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password1" name="password1" placeholder="Enter password" />
    </div>
    <br />
    <button type="submit" className="btn btn-primary">Login</button>
  </form>

</div>
  );
}

export default Login;