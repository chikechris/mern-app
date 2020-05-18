import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom' 
import Nav from './Nav'

const Login = () => { 
  const [state, setState] = useState({
      name: '', 
      password: ''
  }) 

  const {name, password} = state 

  // onChange event handler  
  const onChange = (name) => (event) => {
    // console.log('name', name, 'event', event)
    setState({ ...state, [name]: event.target.value })
  }

  // onSubmit event handler 
  const onSubmit = event => {
    event.preventDefault()
    console.table({name, password}) 
    // axios.post(`${process.env.REACT_APP_API}/post`, { title, content, user })
    //   .then(response => {
    //     console.log(response)
    //     // empty post 
    //     setState({ ...state, title: '', content: '', user: '' })
    //     // display success alert 
    //     alert(`Post titled ${response.data.title} is created`)
    //   })
    //   .catch(error => {
    //     console.log(error.response)
    //     alert(error.response.data.error)
    //   })
  }

  return (
    <div>
      <Nav /> 
      <br /> 
      <h1>Login</h1> 
      <br /> 
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label className='text-muted'>User Name</label>
          <input
            value={name}
            onChange={onChange('name')}
            type='text'
            className='form-control'
            placeholder='Input Name'
            required
          />
        </div>
        <div className='form-group'>
          <label className='text-muted'>Password</label>
          <input
            value={password}
            onChange={onChange('password')}
            type='password'
            className='form-control'
            placeholder='Input Password'
            required
          />
        </div>
        <div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Login
