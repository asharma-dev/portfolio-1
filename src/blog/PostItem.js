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

    getRes = async () => {
        let getImgUrl = null;
        const { featured_media, author } = this.props.post;

        if(featured_media) {
        const getMedia = await axios.get(`${BaseUrl}/wp-json/wp/v2/media/${featured_media}`);
        getImgUrl =  getMedia.data.media_details.sizes.full.source_url;
        }

        // const getAuthor = await axios.get(`${BaseUrl}/wp-json/wp/v2/users/${author}`);

        this.setState({
            imgUrl: getImgUrl,
            // author: getAuthor.data.name,
            author: '',
            isLoaded: true
        });
    }

    componentDidMount() {
        this.getRes();
    }

    render() {

        const { id, title, excerpt } = this.props.post;
        const { author, imgUrl, isLoaded } = this.state;

        if(isLoaded) {
            return (
                <div>
                    <h2 dangerouslySetInnerHTML={{ __html: title.rendered }} />

                    <small>Review by <strong>{ author }</strong></small>
                    {
                        imgUrl ?   
                            <img 
                            style={{ width: '100%' }} 
                            src={ imgUrl } 
                            alt={title.rendered} 
                            />
                        : null
                    }
                    <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
                    <Link to={`/blog/${id}`}>Read Review</Link>
                </div> 
            )
        }

        return null;
    }
}

export default PostItem
