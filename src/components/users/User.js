import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {

  const githubContext = useContext(GithubContext);
  // console.log(githubContext);
  const { getUser, loading, user, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  console.log(user);
  // const {loading, repos} = this.props;

  if (loading) {
    return (
      <Spinner />
    )
  } else {
    return user != null ? (
      <Fragment>
        {/* <Link to='/' className="btn btn-primary"> Back</Link> */}
        <Link className="btn btn-primary" to="/">Back</Link>
        <br />
        {name} <br />
        {hireable ? <i className="fas fa-check text-success"> </i> : <i className="fas fa-times-circle text-danger"> </i>}

        <div className="card p-2">
          <div className="row">
            <div className="col-md-6">
              <img src={avatar_url} className="rounded-circle" alt="" style={{ width: '120px' }} />
              <h2>{name}</h2>
              <p>{location}</p>
            </div>
            <div className="col-md-6">
              {bio &&
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>}

              <a href={html_url} target="_blank" className="btn btn-primary" rel="noopener noreferrer">Open Github</a>
              <ul className="mt-2">
                <li>
                  {
                    login &&
                    <Fragment>
                      <strong>Username: </strong>
                      {login}
                    </Fragment>
                  }
                </li>
                <li>
                  {
                    company &&
                    <Fragment>
                      <strong>Company: </strong>
                      {login}
                    </Fragment>
                  }
                </li>
                <li>
                  {
                    blog &&
                    <Fragment>
                      <strong>Website: </strong>
                      {blog}
                    </Fragment>
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card mt-2">
          <div className="row py-2 text-center justify-content-center align-items-center">
            <span className="badge badge-primary mr-2">
              Followers: {followers}
            </span>
            <span className="badge badge-success mr-2">
              Following: {following}
            </span>
            <span className="badge badge-warning mr-2">
              Public Repos: {public_repos}
            </span>
            <span className="badge badge-danger">
              Public Gists: {public_gists}
            </span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <Repos repos={repos}></Repos>
          </div>
        </div>
      </Fragment>
    ) : '';
  }


}

// User.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   user: PropTypes.object.isRequired,
//   getUserRepos: PropTypes.func.isRequired,
//   getUser: PropTypes.func.isRequired,
//   repos: PropTypes.array.isRequired,
// }

export default User;
