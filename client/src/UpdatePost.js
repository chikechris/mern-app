import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'

const UpdatePost = (props) => {
  const [state, setState] = useState({
    title: "", 
    content: "",
    slug: "", 
    user: ''
  }) 

  const {title, content, slug, user } = state
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then(resp => { 
        const {title, content, slug, user} = resp.data
        setState({...state, title, content, slug, user})
      })
      .catch(error => alert('Error displaying post'))
  }, []) 



  // onChange event handler  
  const onChange = (name) => (event) => {
    // console.log('name', name, 'event', event)
    setState({ ...state, [name]: event.target.value })
  }

  // onSubmit event handler 
  const onSubmit = event => {
    event.preventDefault()
    // console.table({title, content, user}) 
    axios.put(`${process.env.REACT_APP_API}/post/${slug}`, { title, content, user })
      .then(response => {
        console.log(response) 
        const {title, content, slug, user} = response.data
        // empty post 
        setState({ ...state, title, content, slug, user})
        // display success alert 
        alert(`Post titled ${title} is updated`)
      })
      .catch(error => {
        console.log(error.response)
        alert(error.response.data.error)
      })
  } 

const showUpdateForm= () => (
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
      <button className="btn btn-primary">Update</button>
    </div>
  </form>
)
  


  return (
    <div className="container pb-5">
      {/* {JSON.stringify(props)} */}
      <Nav />
      <br />
      <h1>Update Post</h1>
        {showUpdateForm()}
    </div>
  )
}

export default UpdatePost
