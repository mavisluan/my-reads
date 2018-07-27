import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
    state = {
        query: '',
        result: [],
        errorMessage: ''
    }
    
    updateQuery = (query) => {
        this.setState({ query: query})   
        if (query) {
            BooksAPI.search(query).then(result => {
                result.map(book => (
                    this.props.books.forEach(b => (
                     (book.id === b.id) 
                     ? book.shelf = b.shelf
                     : book
                    ))
                 ))
                 this.setState({result})
            }).catch((e) => {
                  this.setState({ 
                    result: [],
                    errorMessage: 'No result'
                  })
            })        
        }
    }


    render () {
        const { query, result, errorMessage } = this.state
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
                    {query.length !== 0 && result.length === 0 &&
                    (<span>{errorMessage}</span>)}                  
                    <Book 
                        books={query ? result : []}
                        onMoveShelf={updateShelf}
                    />
                </div>
            </div>
        )
    }
} 

export default SearchPage