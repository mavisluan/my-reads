import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
        const { books, updateShelf } = props
        return (
            <div>
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                <div className='list-books-content'>
                    <BookShelf
                        title='Currently Reading' 
                        shelf='currentlyReading'
                        books={books}
                        onMoveShelf={updateShelf}
                    />
                    <BookShelf 
                        title='Want to Read' 
                        shelf='wantToRead'
                        books={books}
                        onMoveShelf={updateShelf}
                    />
                    <BookShelf 
                        title='Read'
                        shelf='read'
                        books={books}
                        onMoveShelf={updateShelf}
                    />
                </div>  
                <div className='open-search'>
                    <Link to='/search'>Search</Link> 
                </div>             
            </div>
        )
}

export default HomePage