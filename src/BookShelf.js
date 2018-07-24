import React, { Component } from 'react'

class BookShelf extends Component {
    render () {
        const { books, shelf, title } = this.props
        return (
            <div className='bookshelf'> 
                <div className='bookshelf-title'>
                    <h3>{title}</h3>
                </div>
                <div className='bookshelf-books'>
                    <ul className='books-grid'>
                        {books.filter((book) => book.shelf === shelf).map((book) => (
                            <li key={book.id}>
                                <div className='book'>
                                    <div className='book-top'>
                                        <img
                                        style={{height: '200px'}}
                                        src={`${book.imageLinks.thumbnail}`} 
                                        alt={`${book.imageLinks.smallThumbnail}`}
                                        />
                                        <div className='book-shelf-changer'>
                                            <select >
                                                <option>Move to ...</option>
                                                <option>Currently Reading</option>
                                                <option>Want to Read</option>
                                                <option>Read</option>
                                                <option>None</option>
                                            </select>
                                        </div> 
                                    </div>
                                    <div> 
                                        <p className='book-title'>{book.title}</p>
                                        <p className='book-authors'>{book.authors}</p>    
                                    </div>                  
                                </div>                  
                            </li>
                        ))}
                    </ul>
                </div>  
            </div>
        )
    }
}

export default BookShelf