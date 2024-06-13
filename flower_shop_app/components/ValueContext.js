import React, { useState, useContext, createContext } from "react";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [currentValue, setCurrentValue] = useState({ username: '', password: '' });

  return (
    <ValueContext.Provider value={{ currentValue, setCurrentValue }}>
      {children}
    </ValueContext.Provider>
  );
};

export const useValue = () => useContext(ValueContext);