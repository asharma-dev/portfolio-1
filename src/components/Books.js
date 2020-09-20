import Axios from 'axios'
import React, { Component } from 'react'
import BookItem from './BookItem'
import ProxyUrl from '../proxy'
export class Books extends Component {

    state = {
        books: [],
        isLoaded: false
    }

    componentDidMount() {
        Axios.get(`${ProxyUrl}/wp-json/wp/v2/posts`)
        .then(res => this.setState({
            books: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }

    render() {

        const { books, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div>
                    { books.map(book => (
                        // <h4>{ book.title.rendered }</h4>
                        <BookItem key={book.id} book={book} />
                    )) }
                </div>
            );
        }

        return <h3>Loading...</h3>
    }
}

export default Books
