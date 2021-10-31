import React, { createContext, useState } from "react";

export const UserAdminContext = createContext();

const UserAdminProvider = (props) => {
  const [userAdmin, setUserAdmin] = useState({
    local: "",
  });

  return (
    <UserAdminContext.Provider value={{ userAdmin, setUserAdmin }}>
      {props.children}
    </UserAdminContext.Provider>
  );
};

export default UserAdminProvider;
