import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// IMPORT CSS
import './App.css';

//IMPORT COMPONENTS
import AppBar from './components/AppBar';


// IMPORT VIEW
import Home from './view/Home';
import Books from './view/Books';
import Book from './view/Book';
import BookCard from './components/BookCard';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar></AppBar>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books/" component={Books} />
        <Route path="/book/:isbn" component={Book} />
      </Switch>
    </Router>
  );
}

export default App;
