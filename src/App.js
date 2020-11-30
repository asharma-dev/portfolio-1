import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'

import SiteHeader from './components/SiteHeader/index'
import SiteFooter from './components/SiteFooter'
import HomePage from './portfolio'
import Blog from './blog/Posts'
import SinglePost from './blog/SinglePost'


function App() {
  return (
    <Router>
      <Fragment>
        <SiteHeader />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={SinglePost} />
          </Switch>
        </main>
      </Fragment>
    </Router>
  );
}

export default App;