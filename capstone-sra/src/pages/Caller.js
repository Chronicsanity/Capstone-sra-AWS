import React from "react";


var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:3000/caller", true);
function Caller() {
  return (
    <div className="about">
  <h1>Caller Page</h1>
  <form action="/caller" method="post">
    <button name="nextProspect" type="submit" onclick="caller()">Next Prospect</button>
  </form>
  <h3> Student Name </h3>
  {'{'}{'{'} studentFName {'}'}{'}'}
  {'{'}{'{'} studentLName {'}'}{'}'}
  <h3> Student Phone Number </h3>
  {'{'}{'{'} studentPhoneArea {'}'}{'}'}
  {'{'}{'{'} studentPhoneNum {'}'}{'}'}
  {'{'}{'{'} studentPhoneEx {'}'}{'}'}
</div>
  );
}

export default Caller;