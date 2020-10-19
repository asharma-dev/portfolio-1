import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'
import './App.css';


function App() {
  return (    
    <Router>
      <Fragment>
        <Route exact path="/" component={Posts} />
        <Route exact path="/post/:id" component={SinglePost} />
      </Fragment>
    </Router>
  );
}

export default App;