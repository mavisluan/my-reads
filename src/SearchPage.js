import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
    state = {
        query: '',
        searchResult: [],
        errorMessage: ''
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.shelfBooks !== prevProps.shelfBooks) {
            this.updateSearchResult(this.state.searchResult)
        }
    }

    updateQuery = (query) => {
        this.setState({ query: query})   

        if (query) {
            this.handleSearchResult(query)
        }
    }

    updateSearchResult = (data) => {
        const {shelfBooks} = this.props
        let result=[]
          data.forEach(book => {
            shelfBooks.forEach(b => {
              if (book.id === b.id) {
                book = b 
              }
            })
            result.push(book)
          })
          this.setState({
            searchResult: result
          })
      }
      
      handleSearchResult = (query) => {
        BooksAPI.search(query).then(data => {
          console.log('no error')
          this.updateSearchResult(data)
        }).catch((e) => {
            console.log('error', e)
            this.setState({ 
              searchResult: [],
              errorMessage: 'No result'
            })
        })
      }
    

    render () {
        const { query, searchResult, errorMessage } = this.state
        const { updateShelf, shelfBooks } = this.props
        console.log(searchResult)
        return (
            <div>
                <div className='search-books-bar '>
                    <Link className='close-search' to='/'>Home</Link>
                    <input 
                        name='search'
                        value={query}
                        onChange={
                            (e) => this.updateQuery(e.target.value)
                        }
                    />
                </div>
                <div className='search-books-results'>
                    {query.length !== 0 && searchResult.length === 0 &&
                    (<span>{errorMessage}</span>)}                  
                    <Book 
                        shelfBooks={shelfBooks}
                        books={query ? searchResult : []}
                        onMoveShelf={updateShelf}
                        query={query}
                    />
                </div>
            </div>
        )
    }
} 

export default SearchPage