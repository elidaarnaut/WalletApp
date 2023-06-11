import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userId, setUserId] = useState(null); // Initialize userId with null or a default value

  return (
    <GlobalContext.Provider value={{ userId, setUserId }}>
      {children}
    </GlobalContext.Provider>
  );
};
