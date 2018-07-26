import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
        const { books, shelf, title, onMoveShelf } = props
        const showingBooks = books.filter((book) => book.shelf === shelf)
        return (
            <div className='bookshelf'> 
                <div className='bookshelf-title'>
                    <h3>{title}</h3>
                </div>
                <div className='bookshelf-books'>
                   <Book 
                    books={showingBooks}
                    onMoveShelf={onMoveShelf}
                    /> 
                </div>  
            </div>
        )
}

export default BookShelf