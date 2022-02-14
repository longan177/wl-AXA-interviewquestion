import React, { useState, useEffect, useContext } from "react";

const UserContext = React.createContext();
export function useUserContext() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [active, setActive] = useState(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("running useeffect");
    const url = `https://gorest.co.in/public/v2/users?name=${name}&status=${
      active ? "active" : "inactive"
    }`;
    // console.log(url);
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data[0]);
    };
    fetchData();
  }, [name, active]);

  console.log("current user is ", user);

  const value = {
    setName,
    setUser,
    setActive,
    active,
    user,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
