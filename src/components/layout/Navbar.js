import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a
        className="navbar-brand"
        href="/"
        rel="noopener noreferrer"
      >
        <i className="fa fa-home mr-1"></i>
        {title}
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>

      </div>
    </nav>

  )

}

Navbar.defaultProps = {
  title: "Github finder"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;