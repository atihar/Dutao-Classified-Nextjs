// import Cookies from 'js-cookie';
// There was a problem with retreiving data from js-cookie... Revised storage is in 
//   localstorage . Standard Calling variable is store.. but as it may raise conflicts with the file-name
//   we are using the name as Cookies for now


import Cookies from 'store-js';
import { createContext, useReducer } from 'react';


export const Store = createContext();

const initialState = {
  userInfo: Cookies.get('userInfo')
    ? JSON.parse(JSON.stringify(Cookies.get('userInfo')))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}