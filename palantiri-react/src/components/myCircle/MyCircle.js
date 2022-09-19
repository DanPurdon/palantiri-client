import React, { useEffect, useState } from "react"
import { getMyCircle } from "../../managers/CircleManager.js"
import { Link, useNavigate } from 'react-router-dom'


export const MyCircle = () => {
    const [ myCircle, setMyCircle ] = useState({})
    const navigate = useNavigate()
    
    
    useEffect(() => {
        getMyCircle().then(data => setMyCircle(data[0]))
    }, [])
    const memberNumbers = myCircle?.circle_members?.length
    
    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader"><Link className="portal__link" to="/" >Circles</Link> / {myCircle.name}</h2>
            <h3><Link className="member__link" to="/mymembers" state={{ circleName: myCircle.name }}>Members: {memberNumbers}</Link></h3>
        </div>
        
        {memberNumbers > 2 
        ?
        <>
        <article className="posts">
            <h4>Circle Posts
                <br></br><Link className="post__link" to="/post" state={{ circleName: myCircle.name }}>Create New Post</Link>
            </h4>
            {
                myCircle?.circle_posts?.map(post => {
                    return <section key={`post--${post.id}`} className="post">
                        <div className="post__date"><strong>{post.date_posted}</strong></div>
                        <div className="post__content">{post.content}</div>
                        <Link className="details__link" to={`/mycircle/${post.id}`} state={{ circleName: myCircle.name }}>Details</Link>
                    </section>
                })
            }
        </article>

        <article className="messages">
            <h4>Circle Direct Messages</h4>
            {
                myCircle?.circle_messages?.map(message => {
                    return <section key={`message--${message.id}`} className="message">
                        <div className="message__date"><strong>{message.date_sent}</strong></div>
                        <div className="message__content">{message.content}</div>
                        <Link className="message__link" to={`/mymessages/${message.id}`} state={{ circleName: myCircle?.name }}>Details</Link>
                    </section>
                })
            }
        </article>
        </>

        :
        <>
        Circles must have a minimum of three members before activation. <br></br> 
        <Link className="invite__link" to="/invite" state={{ circleName: myCircle?.name }}>Invite More Members</Link>
        </>
        }
        </>
    )
}