import React, { useEffect, useState } from "react"
import { createPost } from "../../managers/PostManager.js"
import { Link, useNavigate, useLocation } from 'react-router-dom'

export const Post = () => {
    const [ postText, setPostText ] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    
    const { circleName } = location?.state

    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader">
                <Link className="portal__link" to="/" >Circles</Link> / <Link 
                    className="my_circle__link" to="/mycircle" >{circleName}</Link> / Post
            </h2>
        </div>
        <article className="new-post">
            
            <fieldset>
                <div className="form-group">
                    <form>
                    <label htmlFor="post-text">Create a new post: </label>
                    <br></br>
                    <textarea name="post-text" rows="15" cols="80" required autoFocus 
                        value={postText}
                        onChange={
                            (evt) => {
                                setPostText(evt.target.value)
                            }
                        }></textarea>
                    {/* <input type="textarea" name="post-text" required autoFocus className="form-control" 
                        value={postText}
                        onChange={
                            (evt) => {
                                setPostText(evt.target.value)
                            }
                        }
                    /> */}
                    </form>
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    createPost(postText)
                        .then(() => navigate("/mycircle"))
                }}
                className="btn btn-primary">Create Post</button>

        </article>

        </>
    )
}