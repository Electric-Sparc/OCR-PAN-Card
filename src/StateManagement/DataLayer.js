import React, { useContext, useReducer } from "react";

const DataLayerContext = React.createContext();

export const DataLayer = ({ initialstate, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialstate)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
