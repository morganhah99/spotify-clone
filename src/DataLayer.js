//datalayer refers to information such as song, user, playlist, or items in this case

import React, { createContext, useContext, useReducer} from "react";

export const DataLayerContext = createContext(); //prepares the data layer

export const DataLayer = ({ initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
); //children referes to whatever is being wrapped by the datalayer component. in this case it is app

export const useDataLayerValue = () => useContext(DataLayerContext);

