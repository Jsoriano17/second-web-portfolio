import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AboutMe } from './components/AboutMe';
import NotFound from './NotFound';
import { WebLayout } from './WebLayout';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={WebLayout} />
      <Route exact path='/about' component={AboutMe}/>
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
