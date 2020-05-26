import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';
import {getUser, getToken} from './helper'

function Form() {
  // post state
  const [post, setPost] = useState({
    title: '',
    user: getUser(),
  });

  const [content, setContent] = useState('');

  // rich text editor handle change
  const handleContent = (event) => {
    console.log(event);
    setContent(event);
  };
  // destructure value from post
  const { title, user } = post;

  // onChange event handler
  const onChange = (name) => (event) => {
    // console.log('name', name, 'event', event)
    setPost({ ...post, [name]: event.target.value });
  };

  // onSubmit event handler
  const onSubmit = (event) => {
    event.preventDefault();
    // console.table({title, content, user})
    axios
      .post(`${process.env.REACT_APP_API}/post`, { title, content, user }, {
        headers: {
          authorization: `Bearer ${getToken()}`
        }
      })
      .then((response) => {
        console.log(response);
        // empty post
        setPost({ ...post, title: '', user: '' }); 
        setContent('')
        // display success alert
        alert(`Post titled ${response.data.title} is created`);
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  return (
    <div className='container pb-5'>
      <Nav />
      <br />
      <h2>Create Post</h2>
      <br />
      {/* {JSON.stringify(post)} */}
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label className='text-muted'>Title</label>
          <input
            value={title}
            onChange={onChange('title')}
            type='text'
            className='form-control'
            placeholder='Input Title'
            required
          />
        </div>
        <div className='form-group'>
          <label className='text-muted'>Content</label>
          <ReactQuill
            value={content}
            onChange={handleContent}
            className='form-group'
            placeholder='Input Content'
            style={{ border: '1px solid #555' }}
          />
        </div>
        <div className='form-group'>
          <label className='text-muted'>User</label>
          <input
            value={user}
            onChange={onChange('user')}
            type='text'
            className='form-control'
            placeholder='User Name'
            required
          />
        </div>
        <div>
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
