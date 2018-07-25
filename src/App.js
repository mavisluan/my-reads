import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage';
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    searchResult: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    handleSearchResult: PropTypes.func.isRequired
  }


  state = {
    books: [],
    searchResult: []
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

handleSearchResult = (query) => {
  BooksAPI.search(query).then(books => {
    console.log('no error')
    this.setState({
      searchResult: books
    })
  }).catch((e) => {
      console.log('error', e)
      this.setState({ 
        searchResult: []
      })
  })
}

  render() {
    console.log(this.state.books)
    console.log(this.state.searchResult)
    return (
      <div className="App">
          <Route exact path='/' render={() => (
            <HomePage 
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          )}/>
          <Route path='/search' render={() => (
            <SearchPage 
              books={this.state.searchResult}
              onSearch={this.handleSearchResult}
              updateShelf={this.updateShelf}
            />
          )}/>
      </div>
    );
  }
}

export default App;