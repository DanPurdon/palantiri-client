import React, { useEffect, useState } from "react"
import { getOtherCircles } from "../../managers/CircleManager.js"
import { Link, useNavigate } from 'react-router-dom'


export const OtherCircles = () => {
    const [ otherCircles, setOtherCircles ] = useState({})
    const navigate = useNavigate()
    
    
    useEffect(() => {
        getOtherCircles().then(data => setOtherCircles(data))
    }, [])
    
    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader"><Link className="portal__link" to="/" >Circles</Link> / Other Circles </h2>
        </div>
        
        <article className="circles">
            <h4>Circles I belong to:
                {/* <br></br><Link className="post__link" to="/post" state={{ circleName: otherCircle.name }}>Create New Post</Link> */}
            </h4>
            {
                otherCircles?.map(circle => {
                    return <section key={`circle--${circle.id}`} className="circle">
                        <div className="circle__name"><strong>{circle.name}</strong></div>
                        <div className="circle__content">{circle.content}</div>
                        {/* <Link className="details__link" to={`/othercircle/${post.id}`} state={{ circleName: otherCircle.name }}>Details</Link> */}
                    </section>
                })
            }
        </article>

        <article className="messages">
            {/* <h4>Circle Direct Messages</h4> */}
            {/* {
                otherCircles?.circle_messages?.map(message => {
                    return <section key={`message--${message.id}`} className="message">
                        <div className="message__date"><strong>{message.date_sent}</strong></div>
                        <div className="message__content">{message.content}</div>
                        <Link className="message__link" to={`/messages/${message.id}`} state={{ circleName: otherCircle.name }}>Details</Link>
                    </section>
                })
            } */}
        </article>
        </>
    )
}