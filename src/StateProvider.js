//setup data layers
import React from "react";
import { createContext, useContext, useReducer } from "react";

//we need this to tract the basket

export const StateContext = createContext();
// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
