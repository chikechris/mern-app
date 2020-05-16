import React from 'react';
import './App.css';

function Create() {
  return (
    <div className='container p-5'>
      <h2>Create Post</h2>
      <br />
      <form>
        <div className='form-group'>
          <label className='text-muted'>Title</label>
          <input
            type='text'
            className='form-control'
            placeholder='Input Title'
            required
          />
        </div>
        <div className='form-group'>
          <label className='text-muted'>Content</label>
          <textarea
            type='text'
            className='form-control'
            placeholder='Input Content'
            required
          />
        </div>
        <div className='form-group'>
          <label className='text-muted'>User</label>
          <input
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

export default Create;
