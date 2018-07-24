import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
    state = {
        query: ''
    }
    
    updateQuery = (query) => {
        this.setState({ query: query.trim()})
    }

    render () {
        return (
            <div>
                <div className='search-books-bar '>
                    <div className='close-search'></div>
                    <input 
                        name='search'
                        value={this.state.query}
                        onChange={(e) => this.updateQuery(e.target.value)}
                    />
                    <p>{this.state.query}</p>
                </div>
                <div className='search-books-results'>
                    <Book 
                        books={this.props.books}
                    />
                </div>
            </div>
        )
    }
} 

export default SearchPage