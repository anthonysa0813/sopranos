import React, { createContext, useState } from "react";

export const PassClientsContext = createContext();

const PassClientsProvider = (props) => {
  const [listPassClients, setlistPassClients] = useState([]);

  return (
    <PassClientsContext.Provider
      value={{ listPassClients, setlistPassClients }}
    >
      {props.children}
    </PassClientsContext.Provider>
  );
};

export default PassClientsProvider;
