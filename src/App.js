import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import homePage from './portfolio'
import Posts from './blog/Posts'
import SinglePost from './blog/SinglePost'
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={homePage} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/post/:id" component={SinglePost} />
      </Fragment>
    </Router>
  );
}

export default App;