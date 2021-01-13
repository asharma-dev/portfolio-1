import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export class PostItem extends Component {

    static propTypes = {
        post: PropTypes.object.isRequired
    }

    render() {
        const { id, title, excerpt } = this.props.post;

        // const indexOfLink = excerpt.rendered.indexOf(`<a href="https://dalbir.wmdd.ca`);
        // const content = excerpt.rendered.substring(0, indexOfLink).replace(/(<([^>]+)>)/ig, '');

        return (
            <div className="content-post-list">
                <h2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} ></div>
                <div className="align-right">
                    <Link to={`/blog/${id}`} className="continue-reading">Continue Reading</Link>
                </div>
            </div>
        )
    }
}

export default PostItem
