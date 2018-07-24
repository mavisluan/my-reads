import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    books: [],
    shelf: ''
}

componentDidMount () {
    BooksAPI.getAll().then((books) => (
        this.setState({
            books: books
        })
    ))    
}

updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((shelf) => {
        book.shelf = shelf
        BooksAPI.getAll().then((books) => (
            this.setState({
                books: books
            })
        )) 
    })
}

  render() {
    console.log(this.state.books)

    return (
      <div className="App">
        <HomePage 
          books={this.state.books}
          updateShelf={this.updateShelf}
        />
      </div>
    );
  }
}

export default App;
