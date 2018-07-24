import React, { Component } from 'react'
import BookShelf from './BookShelf'

class HomePage extends Component {
    render () {
        const { books, updateShelf } = this.props
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
                <button className='open-search'>Search</button>   
            </div>
        )
    }
}

export default HomePage