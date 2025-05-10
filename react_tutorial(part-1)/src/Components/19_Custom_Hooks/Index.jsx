import { createContext, useContext } from "react";

// step 1 - create context
export const BioContext = createContext();

// step 2 - provider for providing values to its children
export const BioProvider = ({ children }) => {
  const myName = "Nipun";
  const age = 99;
  return (
    <BioContext.Provider value={{ myName, age }}>
      {children}
    </BioContext.Provider>
  );
};

// custom hooks

export const useBioContext = () => {
  const context = useContext(BioContext);
  // Handling error in case it is not wrapped in the bioProvider
  if (context === undefined) {
    throw new Error("Not wrapped in BioProvider");
  }
  return context;
};
