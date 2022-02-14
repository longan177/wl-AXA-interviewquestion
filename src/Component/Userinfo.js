import React from "react";
import { useUserContext } from "../context";
import { Link } from "react-router-dom";

function Userinfo() {
  const { user } = useUserContext();

  return (
    <div className="fixed-container">
      <div>Name : {user.name} </div>
      <div>Gender :{user.gender} </div>
      <div>Email :{user.email} </div>
      <div>Active :{user.status} </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Userinfo;
