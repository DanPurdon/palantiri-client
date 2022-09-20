import React, { useEffect, useState } from "react"
import { getOtherCircles } from "../../managers/CircleManager.js"
import { Link, useNavigate } from 'react-router-dom'
import { acceptInvitation, deleteInvitation, deleteMember, getMyInvites } from "../../managers/MemberManager.js"


export const OtherCircles = () => {
    const [ otherCircles, setOtherCircles ] = useState({})
    const [ myInvites, setMyInvites ] = useState({})
    const navigate = useNavigate()
    
    
    const loadOtherCircles = () => {
        getOtherCircles().then(data => setOtherCircles(data))
    }
    const loadMyInvites = () => {
        getMyInvites().then(data => setMyInvites(data))
    }

    useEffect(() => {
        loadOtherCircles()
        loadMyInvites()
    }, [])
    
    
    
    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader"><Link className="portal__link" to="/" >Circles</Link> / Other Circles </h2>
        </div>
        
        <article className="invites">
            {myInvites.length ?<h3>Active Invites:</h3>:""}
            {
                myInvites.length ?
                myInvites.map(invite => {
                    return <section key={`invite--${invite.id}`} className="invite">
                    <strong>{invite.circle.name}</strong>
                    <br></br>
                    <button className="button-55" onClick={() => {
                                        acceptInvitation(invite.id)
                                        .then(loadOtherCircles)
                                        .then(loadMyInvites)
                                        }}
                                    >Accept</button>
                    <button className="button-55" onClick={() => {
                                        deleteInvitation(invite.id)
                                        }}
                                    >Decline</button>
                    </section>
                })
                :
                ""
            }
        </article>
        <article className="circles">
            <h3>Circles I belong to:</h3>
            {
                otherCircles.length ?
                otherCircles.map(circle => {
                    return <section key={`circle--${circle.id}`} className="circle">
                        <Link className="circle__link" to={`/circles/${circle.id}`}><strong>{circle.name}</strong></Link>
                        {/* <button className="button-55" onClick={() => {
                                        confirmDelete(member.id)
                                        }}
                                    >Leave Circle</button> */}
                    </section>
                })
                :
                ""
            }
        </article>

        </>
    )
}