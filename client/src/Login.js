import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import { Link, withRouter } from 'react-router-dom' 
import Nav from './Nav' 
import {auth, getUser} from './helper' 

const Login = ({history}) => { 
  const [state, setState] = useState({
      name: '', 
      password: ''
  }) 

  const {name, password} = state 

  useEffect(() => {
      getUser() && history.push('/')
  }, [])

  // onChange event handler  
  const onChange = (name) => (event) => {
    // console.log('name', name, 'event', event)
    setState({ ...state, [name]: event.target.value })
  }

  // onSubmit event handler 
  const onSubmit = event => {
    event.preventDefault()
    console.table({name, password}) 
    axios.post(`${process.env.REACT_APP_API}/login`, { name, password })
      .then(response => {
        console.log(response)
        // response will contain token and name  
        auth(response, () => history.push('/form'))
        // redirect to form page 
      })
      .catch(error => {
        console.log(error.response)
        alert(error.response.data.error)
      })
  }

  return (
    <div className='container pb-5'>
      <Nav /> 
      <br /> 
      <h1>Login</h1> 
      <hr/> 
      <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col-md-6'>
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
          </div>
        </div>
      </form>

    </div>
  )
}

export default withRouter(Login)
