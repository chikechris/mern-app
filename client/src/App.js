import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then((resp) => {
        // console.log(resp)
        setPosts(resp.data);
      })
      .catch((error) => alert('Error getting posts'));
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className='container pb-5'>
      <Nav />
      <br />
      <h2>mern App</h2>
      <br />
      {/* {JSON.stringify(posts)} */}
      {posts.map((post, i) => (
        <div className='row' key={post._id} style={{borderBottom: '1px solid black'}}>
          <div className='col pt-3 pb-2'>
            <h2>{post.title}</h2>
            <p className='lead'>{post.content.substring(0, 100)}</p>
            <p>
              Author<span className='badge'>{post.user}</span> Published on{' '}
              <span className='badge'>
                {new Date(post.createdAt).toLocaleString()}
              </span>{' '}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
