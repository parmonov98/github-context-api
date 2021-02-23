import {
  SEARCH_USERS,
  SET_USERS,
  SET_LOADING,
  SET_ALERT,
  CLEAR_USERS,
  GET_USER,
  GET_USER_REPOS,
  SHOW_CLEAR_BUTTON
} from "../types";


export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case GET_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ALERT:
      return {
        ...state,
        loading: false,
        alert: action.payload
      };
    case SHOW_CLEAR_BUTTON:
      return {
        ...state,
        loading: false,
        showClearButton: true
      };
    default:
      return {
        ...state
      };
  }
}