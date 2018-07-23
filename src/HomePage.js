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

    render () {
        console.log(this.state.books)
        return (
            <div>
                <h1>MyReads</h1>
                <BookShelf 
                    shelf='currentlyReading'
                    books={this.state.books}
                />
                <h1>Want to Read</h1>
                <BookShelf 
                    shelf='wantToRead'
                    books={this.state.books}
                />
                <h1>Read</h1>
                <BookShelf 
                    shelf='read'
                    books={this.state.books}
                />
            </div>
        )
    }
}

export default HomePage