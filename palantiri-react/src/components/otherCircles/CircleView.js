import React, { useEffect, useState } from "react"
import { getCircle } from "../../managers/CircleManager.js"
import { Link, useNavigate, useParams } from 'react-router-dom'


export const CircleView = () => {
    const [ circle, setCircle ] = useState({})
    const navigate = useNavigate()
    const {circleId} = useParams()
    
    useEffect(() => {
        getCircle(circleId).then(data => setCircle(data))
    }, [])
    const memberNumbers = circle?.circle?.circle_members?.length
    
    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader"><Link className="portal__link" to="/" >Circles</Link> / <Link 
            className="portal__link" to="/circles" >Other Circles</Link> / {circle?.circle?.name}</h2>
            <h3>Members: {memberNumbers}</h3>
        </div>
        
        {memberNumbers > 2 
        ?
        <>
        <article className="posts">
            <h4>Circle Posts</h4>
            {
                circle?.circle?.circle_posts?.map(post => {
                    return <section key={`post--${post.id}`} className="post">
                        <div className="post__date"><strong>{post.date_posted}</strong></div>
                        <div className="post__content">{post.content}</div>
                        <Link className="details__link" to={`/posts/${post.id}`} state={{ circleName: circle?.circle?.name }}>Details</Link>
                    </section>
                })
            }
        </article>

        <article className="messages">
            <h4>Your Direct Messages
                <br></br>
            <Link className="portal__link" to={`/messages/create/${circle?.circle?.id}`} state={{ circleName: circle?.circle?.name }}>Compose new message</Link>
            </h4>
            {
                circle?.myMessages?.map(message => {
                    return <section key={`message--${message.id}`} className="message">
                        <div className="message__date"><strong>{message.date_sent}</strong></div>
                        <div className="message__content">{message.content}</div>
                        <Link className="message__link" to={`/messages/${message.id}`} state={{ circleName: circle?.circle?.name }}>Details</Link>
                    </section>
                })
            }
        </article>
        </>

        :
        "Circle must have at least three members in order to be active."
        }

        
        </>
    )
}