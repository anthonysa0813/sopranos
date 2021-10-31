import React, { createContext, useState } from "react";

export const UserBoxContext = createContext();

const UserBoxProvider = (props) => {
  const [userBox, setUserBox] = useState({
    box: "",
    local: "CHORRILLOS",
  });
  const [showForm, setShowForm] = useState(false);

  return (
    <UserBoxContext.Provider
      value={{ userBox, setUserBox, showForm, setShowForm }}
    >
      {props.children}
    </UserBoxContext.Provider>
  );
};

export default UserBoxProvider;
