import React, { Component } from 'react'
import Book from './Book'

class SearchPage extends Component {
 
    state = {
        query: ''
    }
    
    updateQuery = (query) => {
        this.setState({ query: query.trim()})
        if (query) {
            this.props.onSearch(query)
        } 
    }
    
    render () {
        return (
            <div>
                <div className='search-books-bar '>
                    <div className='close-search'></div>
                    <input 
                        name='search'
                        value={this.state.query}
                        onChange={
                            (e) => this.updateQuery(e.target.value)
                        }
                    />
                </div>
                <div className='search-books-results'>
                    <Book 
                        books={this.props.books}
                        onMoveShelf={this.props.updateShelf}
                    />
                </div>
                <p>Query:{this.state.query}</p>
            </div>
        )
    }
} 

export default SearchPage