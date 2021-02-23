import React, { useReducer } from "react";
import alertReducer from "./alertReducer";

import AlertContext from "../alert/alertContext";

import {
  SET_ALERT, REMOVE_ALERT
} from "../types";

const AlertState = (props) => {
  const initialState = null;


  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message, type) => {
    // console.log(type, message);
    dispatch({ type: SET_ALERT, payload: { type: type, message: message } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);

  }



  return (
    <AlertContext.Provider
      value={
        {
          alert: state,
          setAlert
        }
      }
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;