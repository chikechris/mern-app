import React from 'react' 
import {BrowserRouter, Switch, Route} from 'react-router-dom'  
import App from './App' 
import Form from './Form';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/form' exact component={Form} />
      </Switch>
    </BrowserRouter>
  );
} 

export default Routes