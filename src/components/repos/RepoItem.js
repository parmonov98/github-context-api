import React from 'react';
import PropTypes from 'prop-types';


const RepoItem = ({repo}) => {
  return (
    <div className="card p-1 ">
      <h4>
        <a href={repo.html_url}>{repo.name}</a>
      </h4>
    </div>
  )
}

RepoItem.prototype = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
