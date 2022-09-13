import React, { useEffect, useState } from "react"
import { getMyInvites } from "../../managers/MemberManager.js"
import { Link, useNavigate, useLocation } from 'react-router-dom'


export const Invite = () => {
    const [ myInvites, setMyInvites ] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    
    const loadInvites = () => {
        getMyInvites().then(data => setMyInvites(data))
    }

    useEffect(() => {
        loadInvites()
    }, [])
    
    const { circleName } = location?.state

    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader">
                <Link className="portal__link" to="/" >Circles</Link> / <Link 
                    className="my_circle__link" to="/mycircle" >{circleName}</Link> / <Link 
                    className="my_members__link" to="/mymembers" state={{ circleName: circleName }}>My Members</Link> / Invite</h2>
        </div>
        <article className="invites">
            <h4>Invite a New Circle Member</h4>
            
            <h4>Pending Invites</h4>
            {
                myInvites?.map(invite => {
                    return <section key={`invite--${invite.id}`} className="invite">
                        <div className="invite__name"><strong>{invite?.circler?.user?.first_name + " " + invite?.circler?.user?.last_name}</strong></div>
                        <div className="invite__content">{invite?.circler?.user?.email}</div>
                    </section>
                })
            }
        </article>

        </>
    )
}