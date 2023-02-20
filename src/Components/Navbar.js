import React from 'react';
import propTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><b>{props.title}</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">General and Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sportent">Sports and Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sciencetech">Science and Technology</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string
}

Navbar.defaultProps = {
  title: "TextUtils",
  aboutText: "About"
}