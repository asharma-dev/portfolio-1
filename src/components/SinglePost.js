import Axios from 'axios'
// import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import BaseUrl from '../proxy'
import React, { Fragment, useEffect, useState, useCallback } from 'react';

function BookPage(props) {
    let postId = props.match.params.id

    let [resData, setResData] = useState({
        title: { rendered: "loading" }, 
        content: { rendered: "loading" }
    });
    // let book = {};

    const fetchData = useCallback(
        (postId) => {
            Axios.get(`${BaseUrl}/wp-json/wp/v2/posts/${postId}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        }, [])

    useEffect(() => {
        fetchData(postId)
    }, [fetchData, postId]);


        return (
            <Fragment>
                <Link to='/'>Go Back</Link>
                <hr />
                <h1>{ resData.title.rendered }</h1>
                <div dangerouslySetInnerHTML={{ __html: resData.content.rendered }} />

                <div>Click me</div>
            </Fragment>
        )

}


export default BookPage