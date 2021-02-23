import React, { useState, useContext } from 'react';
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";



const Search = () => {
  const [search, setText] = useState('');

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { users, searchUsers, clearUsers } = githubContext;
  const { setAlert } = alertContext;

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (search === '') {
      setAlert("PLease, Enter something", 'warning');
    } else {

      searchUsers(search);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form mt-3 mb-3">
        <input type="text"
          className="form-control search"
          name="search"
          value={search}
          onChange={onChange}
          placeholder="Search..." />
        <input type="submit" value="Find" className="btn btn-dark btn-block mt-2" />
      </form>
      {users.length > 0 ? <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> : ''}

    </div>
  )

}

export default Search;