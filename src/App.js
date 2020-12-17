import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'

import SiteHeader from './components/SiteHeader/index'
import HomePage from './portfolio'
import Resume from './portfolio/resume'
import Blog from './blog/Posts'
import SinglePost from './blog/SinglePost'
import Contact from './portfolio/contact'

function App() {
  return (
    <Router>
      <Fragment>
        <SiteHeader />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={SinglePost} />
          </Switch>
        </main>
      </Fragment>
    </Router>
  );
}

export default App;