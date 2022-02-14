import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context";

function Searchform() {
  const [input, setInput] = useState("");
  const { setUser, setActive, active, setName } = useUserContext();
  const navigate = useNavigate();

  const handleActiveClick = (v) => {
    if (v === "yes") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    setName(input.toLowerCase());
    navigate("/info");
  };

  const handleChange = (e) => {
    setInput(e);
  };

  return (
    <section className="search-form">
      <div className="search-form-container fixed-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-control">
            <label>Search User</label>
            <input
              type="text"
              placeholder="eg: Wei Loong"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            ></input>
          </div>

          <div>
            <button
              onClick={() => handleActiveClick("yes")}
              className={`active-yes ${active && "active"}`}
            >
              Yes
            </button>
            <button
              onClick={() => handleActiveClick("no")}
              className={`active-no ${!active && "active"} `}
            >
              No
            </button>
          </div>
          <div>
            <button type="submit" className="btn-submit">
              Search User
            </button>
          </div>
        </form>
        {input}
      </div>
    </section>
  );
}

export default Searchform;

function UserDetail(props) {
  const { name, status, gender, email } = props.user[0];

  return (
    <div className="active-status">
      <div className="username">Username: {name} </div>
      <div className="active-title">Active</div>

      <h4>Email : {email}</h4>
      <h4>Gender: {gender} </h4>
    </div>
  );
}
