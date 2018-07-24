import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render () {
        const { books, shelf, title } = this.props
        const showingBooks = books.filter((book) => book.shelf === shelf)
        return (
            <div className='bookshelf'> 
                <div className='bookshelf-title'>
                    <h3>{title}</h3>
                </div>
                <div className='bookshelf-books'>
                   <Book 
                    books={showingBooks}
                    onMoveShelf={this.props.onMoveShelf}
                    /> 
                </div>  
            </div>
        )
    }
}

export default BookShelf