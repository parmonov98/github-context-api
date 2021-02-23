import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from "../../context/github/githubContext";


const Users = () => {

  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  // console.log(users);

  if (loading) {
    return (
      <Spinner />
    )
  } else {
    return (
      <div style={userStyle}>
        {
          users.map(user => (
            <UserItem key={user.id} user={user} />
          ))
        }
      </div>
    )
  }
}

const userStyle = {
  display: "grid",
  padding: '10px',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;