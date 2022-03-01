import React from "react";

function Signup() {
  return (
    <div className="signup">
  <form method="POST">
    <h3 align="center">Sign Up</h3>
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter first name" />
    </div>
    <div className="form-group">
      <label htmlFor="password1">Password</label>
      <input type="password" className="form-control" id="password1" name="password1" placeholder="Enter password" />
    </div>
    <div className="form-group">
      <label htmlFor="password2">Password (Confirm)</label>
      <input type="password" className="form-control" id="password2" name="password2" placeholder="Confirm password" />
    </div>
    <br />
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
  );
}

export default Signup;