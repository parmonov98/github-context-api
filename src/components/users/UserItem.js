import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const UserItem = ({ user: {login, avatar_url, html_url} }) => {
  // const { login, avatar_url, html_url } = props.user;

  return (
    <div className="card text-center align-items-center py-2">
      <img src={avatar_url} alt="" className="rounded-circle" style={{width: "60px"}} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-primary btn-sm- my2"> Open details </Link>
      </div>
    </div>
  );
}


UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;