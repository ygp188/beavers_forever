import axios from 'axios';
import React from 'react';

export default function Navbar({ currentUser, setCurrentUser }) {
  const clickHandler = async () => {
    const res = await axios('/api/auth/logout');
    if (res.status === 200) {
      setCurrentUser(null);
      window.location = '/';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/beavers">Beavers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/posts">Posts</a>
            </li>
            {currentUser ? (
              <li className="nav-item">
                <button type="button" className="btn btn-dark" onClick={clickHandler}>Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/user/signup">Sign Up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/user/signin">Sign In</a>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
