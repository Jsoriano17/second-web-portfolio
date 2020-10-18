import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { AboutMe } from './components/AboutMe';
import { WebLayout } from './WebLayout';

function App() {
  return (
    <>
      <Route exact path="/" component={WebLayout} />
      <Route exact path={'/about'} component={AboutMe}/>
    </>
  );
}

export default App;
