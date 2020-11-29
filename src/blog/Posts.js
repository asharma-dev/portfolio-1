import Axios from 'axios'
import React, { Component } from 'react'
import PostItem from './PostItem'
import BaseUrl from '../proxy'

export class Posts extends Component {

    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {

        document.title = window.location.hostname + ": Blog";

        Axios.get(`${BaseUrl}/wp-json/wp/v2/posts`)
        .then(res => this.setState({
            posts: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }

    render() {
        const { posts, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div>
                    { posts.map(post => (
                        // <h4>{ book.title.rendered }</h4>
                        <PostItem key={post.id} post={post} />
                    )) }
                </div>
            );
        }

        return <h3>Loading...</h3>
    }
}

export default Posts