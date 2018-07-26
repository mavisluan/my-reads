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

componentDidMount () {
    BooksAPI.getAll().then((books) => (
        this.setState({books: books})
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
    const { books } = this.state
    console.log(books)
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
              shelfBooks={books}
              updateShelf={this.updateShelf}
            />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;