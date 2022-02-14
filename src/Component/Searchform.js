import React, { useEffect, useState } from "react";

function Searchform() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const url = "https://gorest.co.in/public/v2/users?name=kumar";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    if (users.length === 0) {
      return console.log("User list has not loaded yet.");
    }
    const user = users.filter(
      (user) => user.name.toLowerCase() === input.toLowerCase()
    );
    console.log(user);
    if (user.length === 0) return;
    setCurrentUser({ ...user });
  };

  console.log(currentUser);
  const handleChange = (e) => {
    setInput(e);
  };

  return (
    <section className="search-form">
      <div className="search-form-container fixed-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-control">
            <label>Search User: </label>
            <input
              type="text"
              placeholder="eg: Wei Loong"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            ></input>
            <button type="submit" className="btn-submit">
              Search User
            </button>
          </div>
        </form>
        {input}
        {currentUser && <UserDetail user={currentUser} />}
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
      <span className={`active-yes ${status === "active" && "active"} `}>
        Yes
      </span>
      <span className={`active-no ${status === "inactive" && "active"} `}>
        No
      </span>
      <h4>Email : {email}</h4>
      <h4>Gender: {gender} </h4>
    </div>
  );
}
