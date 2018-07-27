import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
    state = {
        query: '',
        searchResult: [],
        errorMessage: ''
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.books !== prevProps.books) {
            this.updateSearchResult(this.state.searchResult)
        }
    }

    updateQuery = (query) => {
        this.setState({ query: query})   

        if (query) {
            this.handleSearchResult(query)
        }
    }

    updateSearchResult = (data) => {
        const {books} = this.props
        data.map(book => (
           books.forEach(b => (
            (book.id === b.id) 
            ? book.shelf = b.shelf
            : book
           ))
        ))
        this.setState({ searchResult: data})
      }
      
      handleSearchResult = (query) => {
        BooksAPI.search(query).then(data => {
          this.updateSearchResult(data)
        }).catch((e) => {
            this.setState({ 
              searchResult: [],
              errorMessage: 'No result'
            })
        })
      }
    

    render () {
        const { query, searchResult, errorMessage } = this.state
        console.log(searchResult)

        const { updateShelf } = this.props
        return (
            <div>
                <div className='search-books-bar '>
                    <Link className='close-search' to='/'>Home</Link>
                    <input 
                        name='search'
                        value={query}
                        placeholder={`Search here`}
                        onChange={
                            (e) => this.updateQuery(e.target.value)
                        }
                    />
                </div>
                <div className='search-books-results'>
                    {query.length !== 0 && searchResult.length === 0 &&
                    (<span>{errorMessage}</span>)}                  
                    <Book 
                        books={query ? searchResult : []}
                        onMoveShelf={updateShelf}
                    />
                </div>
            </div>
        )
    }
} 

export default SearchPage