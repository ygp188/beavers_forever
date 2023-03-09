import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OnePost from './OnePost';
import PostsForm from './PostsForm';

export default function PostsPage({ currentUser }) {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios('/api/posts').then(({ data }) => setAllPosts(data)).catch(console.log);
  }, []);

  const deleteHandler = async (id) => {
    const res = await axios.delete(`/api/posts/${id}`);
    if (res.status === 200) {
      setAllPosts((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <div>
      <PostsForm setAllPosts={setAllPosts} />
      {allPosts?.map((post) => (
        <OnePost
          key={post.id}
          post={post}
          deleteHandler={deleteHandler}
          currentUser={currentUser}
          setAllPosts={setAllPosts}
        />
      ))}
    </div>
  );
}
