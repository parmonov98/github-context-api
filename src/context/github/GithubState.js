import React, { useReducer, useEffect } from 'react';

import axios from 'axios';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  SET_USERS,
  SET_ALERT,
  GET_USER,
  GET_USER_REPOS,
  SHOW_CLEAR_BUTTON,
  CLEAR_USERS
} from "../types";

let githubClientID;
let githubClientSecret;


if (process.env.NODE_ENV !== 'production') {
  githubClientID = process.env.REACT_APP_GITHUB_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_SECRET_CODE;
} else {
  githubClientID = process.env.GITHUB_ID;
  githubClientSecret = process.env.GITHUB_SECRET;
}



const GithubState = props => {

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
    showClearButton: false,
  }


  const [state, dispatch] = useReducer(githubReducer, initialState);
  // console.log(state.users);

  // setLoading
  const setLoading = () => dispatch({ type: SET_LOADING });
  // const mounted useEffect
  useEffect(() => {
    console.log('mounted');

    (async () => {

      setTimeout(async () => {
        try {
          const responseData = await axios.get(`https://api.github.com/users?client_id=${githubClientID}&client_secret=${githubClientSecret}`);
          // console.log(responseData.data);
          if (responseData.data.length > 0) {
            dispatch({ type: SET_USERS, payload: responseData.data });

          } else {
            dispatch({ type: SET_ALERT, payload: { message: "No user found", type: 'warning' } })
          }
        } catch (err) {
          // console.log(err);
          throw new Error('Unable to get a token.');
          // dispatch({ type: GET_USER, payload: null });

        }

      }, 1000);

    })();

    return () => [];
  }, []);

  // searchUsers
  const searchUsers = async (keyword) => {
    setLoading();
    console.log('Exploring...');

    const url = `https://api.github.com/search/users?q=${keyword}&client_id=${githubClientID}&client_secret=${githubClientSecret}`;

    const responseData = await axios.get(url);
    if (responseData.data.items.length > 0) {
      dispatch({ type: SEARCH_USERS, payload: responseData.data.items });
      dispatch({ type: SHOW_CLEAR_BUTTON });
    } else {
      setAlert("No match found.", 'warning');
    }
  }

  // getUser
  const getUser = async (username) => {
    setLoading();
    const url = `https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`;
    const responseData = await axios.get(url);
    // console.log(responseData);
    dispatch({ type: GET_USER, payload: responseData.data });
  }


  // getUserRepos
  const getUserRepos = async (username) => {
    setLoading();
    const url = `https://api.github.com/users/${username}/repos?per_page=4&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`;
    const responseData = await axios.get(url);
    console.log(responseData);
    dispatch({ type: GET_USER_REPOS, payload: responseData.data });
  }

  // setAlert
  const setAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message: message, type: type } });
  }

  // clearUsers
  const clearUsers = () => dispatch({ type: CLEAR_USERS });



  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        clearUsers,
        searchUsers,
        setAlert,
        getUser,
        getUserRepos,

      }}
    >
      {props.children}
    </GithubContext.Provider>
  )

}


export default GithubState;