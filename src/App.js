import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    books: []
}

// make AJAX requests in componentDidMount to avoid it resolves before the component mount 
componentDidMount () {
    BooksAPI.getAll().then((books) => (
        this.setState({books: books})
    ))    
}

updateShelf = (bookToMove, shelfSelected) => {
  // use the former state to update the new state
  this.setState((state) => {
    //filter the books that are not moved into a new array 'booksNotMoved'
      const booksNotMoved= state.books.filter(book => book.id !== bookToMove.id);
    //update the backend info or the bookToMove
      BooksAPI.update(bookToMove, shelfSelected);
    //update the local bookToMove's shelf to be shelfSelected
      bookToMove.shelf = shelfSelected
      return {
    //combine the booksNotMoved with bootToMove with 'concat' and set the state value
        books: booksNotMoved.concat(bookToMove)
      }
  });
};

  render() {
    const { books } = this.state
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <HomePage 
              books={books}
              updateShelf={this.updateShelf}
            />
          )}/>
          <Route path='/search' render={() => (
            <SearchPage 
              books={books}
              updateShelf={this.updateShelf}
            />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;