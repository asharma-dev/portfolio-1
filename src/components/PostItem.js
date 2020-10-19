import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios';
import BaseUrl from '../proxy'

export class PostItem extends Component {

    state = {
        imgUrl: '',
        author: '',
        isLoaded: false
    }

    static propTypes = {
        post: PropTypes.object.isRequired
    }

    componentDidMount() {
        const { featured_media, author } = this.props.post;
        let getImageUrl = null

        if(featured_media) {
            getImageUrl = axios.get(`${BaseUrl}/wp-json/wp/v2/media/${featured_media}`);
        } else {
            // getImageUrl = axios.get(`${BaseUrl}/wp-json/wp/v2/media/144`);
        }

        const getAuthor = axios.get(`${BaseUrl}/wp-json/wp/v2/users/${author}`);

        

        // Promise.all([getImageUrl, getAuthor]).then(res => {
        Promise.all([getAuthor]).then(res => {
            this.setState({

                // imgUrl: res[0].data.media_details.sizes.full.source_url,
                author: res[0].data.name,
                isLoaded: true
            });
        });
    }

    render() {

        const { id, title, excerpt } = this.props.post;
        // const { author, imgUrl, isLoaded } = this.state;
        const { author, isLoaded } = this.state;

        if(isLoaded) {
            return (
                <div>
                    <h2 style={{ marginBottom: '0' }}>{title.rendered}</h2>
                    <small>Review by <strong>{ author }</strong></small>
                    {/* <img 
                    style={{ width: '100%' }} 
                    src={ imgUrl } 
                    alt={title.rendered} 
                    /> */}
                    <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
                    <Link to={`/post/${id}`}>Read Review</Link>
                </div> 
            )
        }

        return null;
    }
}

export default PostItem
