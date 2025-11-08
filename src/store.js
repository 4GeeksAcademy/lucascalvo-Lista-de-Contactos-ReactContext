import React, { createContext, useContext, useReducer } from "react";

export const initialStore = () => ({
  contacts: [],
  saludo: "Hola mundo",
});


export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "get_contact":
      return { ...store, contacts: action.payload };

    case "add_contact":
      return { ...store, contacts: [...store.contacts, action.payload] };

    case "update_contact":
      return {
        ...store,
        contacts: store.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c
        ),
      };

    case "delete_contact":
      return {
        ...store,
        contacts: store.contacts.filter((c) => c.id !== action.payload),
      };

    case "change_saludo":
      return { ...store, saludo: action.payload };

    default:
      return store;
  }
}


const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalReducer = () => useContext(GlobalContext);
