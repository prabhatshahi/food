import React, { createContext } from "react";
import { food_list } from "../assets/assets";
// Define the context
export const StoreContext = createContext(null);

// Create the context provider component
const StoreContextProvider = (props) => {
  // Define the context value here
  const contextValue = {
    // Add your context values here
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
