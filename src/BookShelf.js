import React, { Component } from 'react'

class BookShelf extends Component {
    render () {
        const { books, shelf } = this.props
        return (
            <div>
                <h2>{shelf}</h2>
                <ul>
                    {books.filter((book) => book.shelf === shelf).map((book) => (
                        <li key={book.id}>
                            {book.title}
                            {book.authors}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BookShelf