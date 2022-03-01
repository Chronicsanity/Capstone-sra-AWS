import React from "react";

function SraRoot() {
  return (
    <div className="sraroot">
  <form method="POST">
    <h1 align="center">Please Enter User Information: </h1>
    <div className="form-group">
      <label htmlFor="email">Email Address: </label>
      <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label htmlFor="role">Role: </label>
      <input type="role" className="form-control" id="role" name="role" placeholder="Please Enter Admin, Caller, or Root" />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
 
</div>
  );
}

export default SraRoot;