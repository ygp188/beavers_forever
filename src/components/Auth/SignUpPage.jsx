import axios from 'axios';
import React from 'react';

export default function SignUpPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/auth/signup', Object.fromEntries(new FormData(e.target)));
    if (res.status === 200) {
      window.location = '/beavers';
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          Username
          <input
            name="username"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter username"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          Email address
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">
          Password
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
