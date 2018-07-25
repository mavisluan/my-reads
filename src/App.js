import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
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
  const {books} = this.state
  BooksAPI.search(query).then(data => {
    console.log('no error')
    let result=[]
    data.forEach(book => {
      books.forEach(b => {
        if (book.id === b.id) {
          book = b 
        }
      })
      result.push(book)
    })
    this.setState({
      searchResult: result
    })
  }).catch((e) => {
      console.log('error', e)
      this.setState({ 
        searchResult: []
      })
  })
}

  render() {
    const { books, searchResult } = this.state
    console.log(searchResult)
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <HomePage 
              books={books}
              updateShelf={this.updateShelf}
            />
          )}/>
          <Route path='/search' render={({history}) => (
            <SearchPage 
              books={searchResult}
              onSearch={this.handleSearchResult}
              updateShelf={(book, shelf) => {
                this.updateShelf(book, shelf)
                history.push('/')
              }}
            />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;