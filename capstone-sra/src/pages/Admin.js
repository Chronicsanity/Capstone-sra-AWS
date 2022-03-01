import React from "react";

function Admin() {
  return (
    <div className="about">
  <h1>This is the ADMIN page</h1>
  <form method="POST">  
    <button type="submit" name="email_button" className="btn btn-primary" value="Send_email">Send Email</button>
  </form>
</div>
  );
}

export default Admin;