import React, { useEffect, useState } from "react"
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import { createMessage } from "../../managers/MessageManager.js"
import { getCircle } from "../../managers/CircleManager.js"


export const SendMessage = () => {
    const [ messageText, setMessageText ] = useState("")
    const [ circle, setCircle ] = useState({})
    const navigate = useNavigate()
    const {circleId} = useParams()
    
    useEffect(() => {
        getCircle(circleId).then(data => setCircle(data))
    }, [])
    
    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader"><Link className="portal__link" to="/" >Circles</Link> / <Link 
            className="portal__link" to="/circles" >Other Circles</Link> / {circle?.circle?.name}</h2>
        </div>
        <article className="new-message">
            
            <fieldset>
                <div className="form-group">
                    <form>
                    <label htmlFor="message-text">Create a new message: </label>
                    <br></br>
                    <textarea name="message-text" rows="15" cols="80" required autoFocus 
                        value={messageText}
                        onChange={
                            (evt) => {
                                setMessageText(evt.target.value)
                            }
                        }></textarea>
                    </form>
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    
                    let messageObject = {"circle": circleId, "content": messageText}
                    createMessage(messageObject)
                        .then(() => navigate(`/circles/${circleId}`))
                }}
                className="btn btn-primary">Send Message</button>

        </article>

        </>
    )
}