import React, {useState} from 'react';
import './App.css';

function Form() {
  // post state
  const [post, setPost] = useState({
    title: "",
    content: "",
    user: ""
  }) 
// destructure value from post 
const {title, content, user} = post 

// onChange event handler  
const onChange = (name) => (event) => {
  // console.log('name', name, 'event', event)
  setPost({...post, [name]: event.target.value})
} 

  return (
    <div className='container p-5'>
      <h2>Create Post</h2>
      <br /> 
      {JSON.stringify(post)}
      <form>
        <div className='form-group'>
          <label className='text-muted'>Title</label>
          <input 
          value= {title} 
          onChange={onChange('title')}
            type='text'
            className='form-control'
            placeholder='Input Title'
            required
          />
        </div>
        <div className='form-group'>
          <label className='text-muted'>Content</label>
          <textarea 
            value={content} 
            onChange={onChange('content')}
            type='text'
            className='form-control'
            placeholder='Input Content'
            required
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
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
