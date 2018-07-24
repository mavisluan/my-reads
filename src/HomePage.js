import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class HomePage extends Component {
    state = {
        books: [],
        shelf: ''
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

    render () {
        console.log(this.state.books)
        return (
            <div>
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                <div className='list-books-content'>
                    <BookShelf
                        title='Currently Reading' 
                        shelf='currentlyReading'
                        books={this.state.books}
                        onMoveShelf={this.updateShelf}
                    />
                    <BookShelf 
                        title='Want to Read' 
                        shelf='wantToRead'
                        books={this.state.books}
                        onMoveShelf={this.updateShelf}
                    />
                    <BookShelf 
                        title='Read'
                        shelf='read'
                        books={this.state.books}
                        onMoveShelf={this.updateShelf}
                    />
                </div>  
                <button className='open-search'>Search</button>   
            </div>
        )
    }
}

export default HomePage