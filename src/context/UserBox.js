import React, { createContext, useState } from "react";

export const UserBoxContext = createContext();

const UserBoxProvider = (props) => {
  const [userBox, setUserBox] = useState({
    box: "",
    local: "CHORRILLOS",
  });

  return (
    <UserBoxContext.Provider value={{ userBox, setUserBox }}>
      {props.children}
    </UserBoxContext.Provider>
  );
};

export default UserBoxProvider;
