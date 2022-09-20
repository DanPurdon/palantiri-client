import React, { useEffect, useState } from "react"
import { deleteMessage, getMessage } from "../../managers/MessageManager.js"
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'


export const MessageDetails = () => {
    const [ message, setMessage ] = useState({})
    const navigate = useNavigate()
    const location = useLocation()
    const {messageId} = useParams()
    
    const { circleName } = location?.state

    useEffect(
        () => {
            getMessage(messageId)
                .then((data) => {setMessage(data[0])})
        },
        [messageId]
    )

    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader">
                <Link className="portal__link" to="/" >Circles</Link> / <Link 
                    className="my_circle__link" to="/mycircle" >{circleName}</Link> / Message Details
            </h2>
        </div>
        <article className="message-details">
        <h3>Message date: {message.date_sent}</h3>
        <h3>Content:</h3>
        <p>{message.content}</p>

        </article>
        <button className="button-55" onClick={() => {
                                        deleteMessage(messageId)
                                        .then(navigate("/mycircle"))
                                        }}
                                    >Delete Message</button>
        </>
    )
}

