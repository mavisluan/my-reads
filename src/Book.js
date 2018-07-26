import React from 'react'

const Book = (props) => (
     <div>
        <ul className='books-grid'> 
            {props.books.map((book) => (
                <li key={book.id}>
                    <div className='book'>
                        <div className='book-top'>
                            <img
                            style={{height: '200px'}}
                            src={(book.imageLinks === undefined) ?
                                `https://vignette.wikia.nocookie.net/bakemonogatari1645/images/2/26/No-cover-placeholder.png/revision/latest?cb=20171227065818`:
                                `${book.imageLinks.thumbnail}`
                            } 
                            alt={`BookInfo`}
                            />
                            <div className='book-shelf-changer'>
                                <select 
                                    name='shelfSelection' 
                                    value={book.shelf === undefined ? 'none': book.shelf}                      
                                    onChange={(e) => props.onMoveShelf(book, e.target.value)}
                                >
                                    <option value=''>Move to ...</option>
                                    <option value='currentlyReading'>Currently Reading</option>
                                    <option value='wantToRead'>Want to Read</option>
                                    <option value='read'>Read</option>
                                    <option value='none'>None</option>
                                </select>
                            </div> 
                        </div>
                        <div> 
                            <p className='book-title'>{(book.title === undefined ? `unknown author` : book.title)}</p>
                            <p className='book-authors'>{book.authors}</p>    
                        </div>                  
                    </div>                  
                </li>
            ))}
        </ul>  
    </div>
)

export default Book