import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from './components/Books'
import BooksPage from './components/BookPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Books} />
          <Route exact path="/book/:id" component={BooksPage} />
        </Fragment>
      </Router>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//           <Books />
//       </header>
//     </div>
//   );
// }

export default App;