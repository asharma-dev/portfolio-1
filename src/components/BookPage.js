import Axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export class BookPage extends Component {
    state = {
        book: {},
        isLoaded: false
    }

    componentDidMount() {
        Axios.get(`/wp-json/wp/v2/posts/${this.props.match.params.id}`)
        .then(res => this.setState({
            book: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }

    render() {
        const { book, isLoaded } = this.state;

        if(isLoaded) {
            return (
                <Fragment>
                    <Link to='/'>Go Back</Link>
                    <hr />
                    <h1>{ book.title.rendered }</h1>
                    <div dangerouslySetInnerHTML={{ __html: book.content.rendered }}></div>
                </Fragment>
            )
        }
        return <h3>Loading...</h3>        
    }
}

export default BookPage