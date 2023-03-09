import axios from 'axios';
import React, { useState } from 'react';

export default function OnePost({
  post, deleteHandler, currentUser, setAllPosts,
}) {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({ title: post.title, text: post.text });

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clickHandler = async () => {
    const { data } = await axios.patch(`/api/posts/${post.id}`, input);
    setAllPosts((prev) => prev.map((el) => {
      if (el.id === post.id) {
        return data;
      }
      return el;
    }));
    setEdit(false);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        {
          edit
            ? (
              <>
                <input name="title" value={input.title} onChange={changeHandler} />
                <input name="text" value={input.text} onChange={changeHandler} />

                <button type="button" onClick={clickHandler}>Save</button>
              </>
            )
            : (
              <>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.text}</p>
              </>
            )
        }

        <h4>{post.User?.username}</h4>

        {currentUser?.id === post.user_id
          && (
            <>
              <button className="btn btn-danger" type="button" onClick={() => deleteHandler(post.id)}>Delete</button>
              <button className="btn btn-info" type="button" onClick={() => setEdit((prev) => !prev)}>Edit</button>
            </>
          )}

      </div>
    </div>
  );
}
