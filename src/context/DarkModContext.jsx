import React, { createContext, useState } from "react";
export const DarkModContext = createContext(false);

export const DarkModProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isLightMod, setLightMod] = useState("Ligth mode");

  function handleClick(e) {
    setDarkMode(e.target.checked);
    if (!isDarkMode) {
      setLightMod("Dark mode");
    } else {
      setLightMod("Ligth mode");
    }
  }

  return (
    <DarkModContext.Provider
      value={{
        isDarkMode,
        isLightMod,
        handleClick,
      }}
    >
      {children}
    </DarkModContext.Provider>
  );
};
