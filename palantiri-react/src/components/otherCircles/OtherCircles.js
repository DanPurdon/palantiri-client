import React, { useEffect, useState } from "react"
import { getOtherCircles } from "../../managers/CircleManager.js"
import { Link, useNavigate } from 'react-router-dom'


export const OtherCircles = () => {
    const [ otherCircles, setOtherCircles ] = useState({})
    const navigate = useNavigate()
    
    const loadOtherCircles = () => {
        getOtherCircles().then(data => setOtherCircles(data))
    }

    useEffect(() => {
        loadOtherCircles()
    }, [])
    
    
    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader"><Link className="portal__link" to="/" >Circles</Link> / Other Circles </h2>
        </div>
        
        <article className="circles">
            <h4>Circles I belong to:</h4>
            {
                otherCircles.length ?
                otherCircles.map(circle => {
                    return <section key={`circle--${circle.id}`} className="circle">
                        <Link className="circle__link" to={`/circles/${circle.id}`}><strong>{circle.name}</strong></Link>
                    </section>
                })
                :
                ""
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