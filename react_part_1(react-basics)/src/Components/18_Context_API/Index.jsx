import { createContext } from "react";

// step1
export const BioContext = createContext();

// step2
export const BioProvider = ({ children }) => {
  const myName = "Nipun";
  const Age = 22;

  return (
    <BioContext.Provider value={{ myName, Age }}>
      {children}
    </BioContext.Provider>
  );
};
