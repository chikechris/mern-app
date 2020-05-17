import React from 'react' 
import {BrowserRouter, Switch, Route} from 'react-router-dom'  
import App from './App' 
import Form from './Form'; 
import SinglePost from './SinglePost'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/form' exact component={Form} /> 
        <Route path='/post/:slug' exact component={SinglePost} />
      </Switch>
    </BrowserRouter>
  );
} 

export default Routes