import React from "react";
import { useUserContext } from "../context";
import { Link } from "react-router-dom";

function Userinfo() {
  //   const { user } = useUserContext();
  //   console.log("user", user);
  return (
    <div className="fixed-container">
      <div>Name : </div>
      <div>Gender : </div>
      <div>Email : </div>
      <div>Active : </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Userinfo;
