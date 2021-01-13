import Axios from 'axios'
import { Link } from 'react-router-dom'
import BaseUrl from '../proxy'
import React, { useEffect, useState, useCallback } from 'react';

function PostPage(props) {

    let postId = props.match.params.id

    let [resData, setResData] = useState({
        title: { rendered: "loading" }, 
        content: { rendered: "loading" }
    });


    const fetchData = useCallback(
        (postId) => {
            Axios.get(`${BaseUrl}/wp-json/wp/v2/posts/${postId}`)
            .then(res => {
                setResData({
                    title: res.data.title,
                    content: res.data.content
                });
                document.title = res.data.title.rendered;
            })
            .catch(err => console.log(err));
        }, [])



    useEffect(() => {
        fetchData(postId)
    }, [fetchData, postId]);


    return (
        <section className="section-blog">
            <div className="single-post">
                <h1 className="section-heading" dangerouslySetInnerHTML={{ __html: resData.title.rendered }} />
                <div dangerouslySetInnerHTML={{ __html: resData.content.rendered }} />
                <div className="floating-back-button">
                    <Link to='/blog'> &lt;&lt; Blog Home</Link>
                </div>
            </div>
        </section>
    )

}


export default PostPage