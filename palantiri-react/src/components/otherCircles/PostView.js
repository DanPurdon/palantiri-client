import React, { useEffect, useState } from "react"
import { createComment, getPost } from "../../managers/PostManager.js"
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'


export const PostView = () => {
    const [ post, setPost ] = useState({})
    const [ commentText, setCommentText ] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const {postId} = useParams()
    
    const { circleName } = location?.state

    useEffect(
        () => {
            loadPost()
        },
        [postId]
    )

    const loadPost = () => {
        getPost(postId).then(data => setPost(data))
    }

    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader">
                <Link className="portal__link" to="/" >Circles</Link> / <Link 
            className="portal__link" to="/circles" >Other Circles</Link> / <Link 
                    className="circle__link" to={`/circles/${post?.post?.circle?.id}`} >{circleName}</Link> / Post Details
            </h2>
        </div>
        <article className="post-details">
        <h3>Post date: {post?.post?.date_posted}</h3>
        <h3>Content:</h3>
        <p>{post?.post?.content}</p>
        <h3>Response:</h3>
        {post?.myComments?.length 
        ? 
                post?.myComments?.map(comment => {
                    return <section key={`comment--${comment.id}`} className="comment">
                        <div className="comment__date"><strong>{comment.date_posted}</strong></div>
                        <div className="comment__content">{comment.content}</div>
                    </section>
                })
        
        : 
        <>
        <fieldset>
                <div className="form-group">
                    <form>
                    <label htmlFor="comment-text">Create your response: (remember, you can only send one response per post!) </label>
                    <br></br>
                    <textarea name="comment-text" rows="15" cols="80" required autoFocus 
                        value={commentText}
                        onChange={
                            (evt) => {
                                setCommentText(evt.target.value)
                            }
                        }></textarea>
                    
                    </form>
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    
                    let commentObject = {"post": postId, "content": commentText}
                    createComment(commentObject)
                        .then(() => loadPost())
                }}
                className="btn btn-primary">Send Response</button>
        </>
        }
        
        </article>

        </>
    )
}

