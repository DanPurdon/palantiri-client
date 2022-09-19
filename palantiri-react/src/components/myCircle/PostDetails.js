import React, { useEffect, useState } from "react"
import { getPost } from "../../managers/PostManager.js"
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'


export const PostDetails = () => {
    const [ post, setPost ] = useState({})
    const navigate = useNavigate()
    const location = useLocation()
    const {postId} = useParams()
    
    const { circleName } = location?.state

    useEffect(
        () => {
            getPost(postId)
                .then((data) => {setPost(data)})
        },
        [postId]
    )

    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader">
                <Link className="portal__link" to="/" >Circles</Link> / <Link 
                    className="my_circle__link" to="/mycircle" >{circleName}</Link> / Post Details
            </h2>
        </div>
        <article className="post-details">
        <h3>Post date: {post?.post?.date_posted}</h3>
        <h3>Content:</h3>
        <p>{post?.post?.content}</p>
        <h3>Comments:</h3>
        {post?.post?.comments?.length ? "" : "No comments yet!"}
            {
                post?.post?.comments?.map(comment => {
                    return <section key={`comment--${comment.id}`} className="comment">
                        <div className="comment__date"><strong>{comment.date_posted}</strong></div>
                        <div className="comment__content">{comment.content}</div>
                    </section>
                })
            }

        </article>

        </>
    )
}

