import axios from 'axios';
import React, { useState } from 'react';

export default function PostForm({ setAllPosts }) {
  const [input, setInput] = useState({ title: '', text: '' });

  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { data } = await axios.post('/api/posts', input);
    setAllPosts((prev) => [data, ...prev]);
    setInput({ title: '', text: '' });
  };

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="title..."
            value={input.title}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Text
          <input
            name="text"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="text..."
            autoComplete="off"
            value={input.text}
            onChange={changeHandler}
          />
        </label>
        <button className="btn btn-info" type="submit">Add post</button>
      </div>
    </form>
  );
}
