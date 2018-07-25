import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
    state = {
        query: ''
    }
    
    updateQuery = (query) => {
        this.setState({ query: query})
        if (query) {
            this.props.onSearch(query)
        }
         
    }
    
    render () {
        const { query } = this.state
        const { books, updateShelf } = this.props
        
        return (
            <div>
                <div className='search-books-bar '>
                    <Link className='close-search' to='/'>Home</Link>
                    <input 
                        name='search'
                        value={query}
                        onChange={
                            (e) => this.updateQuery(e.target.value)
                        }
                    />
                </div>
                <div className='search-books-results'>
                    <Book 
                        books={books}
                        onMoveShelf={updateShelf}
                    />
                </div>
                <p>Query:{query}</p>
            </div>
        )
    }
} 

export default SearchPage