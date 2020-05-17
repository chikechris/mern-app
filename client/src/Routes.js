import React from 'react' 
import {BrowserRouter, Switch, Route} from 'react-router-dom'  
import App from './App' 
import Form from './Form'; 
import SinglePost from './SinglePost' 
import UpdatePost from './UpdatePost'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/form' exact component={Form} /> 
        <Route path='/post/:slug' exact component={SinglePost} /> 
        <Route path='/post/update/:slug' exact component={UpdatePost} />
      </Switch>
    </BrowserRouter>
  );
} 

export default Routes