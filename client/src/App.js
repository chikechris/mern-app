import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios'; 
import {Link} from 'react-router-dom'

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
      <h2>News App</h2>
      <br />
      {/* {JSON.stringify(posts)} */}
      {posts.map((post, i) => (
        <div
          className='row'
          key={post._id}
          style={{ borderBottom: '1px solid black' }}
        >
          <div className='col pt-3 pb-2'>
          <div className='row'>
            <div className="col-md-10">
                <Link to={`/post/${post.slug}`}>
                  <h2>{post.title}</h2>
                </Link>
                {/* <p className='lead'>{post.content.substring(0, 100)}</p> */}
                <p>
                  Author<span className='badge'>{post.user}</span> Published on{' '}
                  <span className='badge'>
                    {new Date(post.createdAt).toLocaleString()}
                  </span>{' '}
                </p>
            </div>
            <div className="col-md-2">
                <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-outline-warning" >
                  Update
                </Link>
                <button className="btn btn-sm btn-outline-danger ml-1">Delete</button>
            </div> 
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
