import React, { useEffect, useState } from "react"
import { deleteMember, getMyMembership } from "../../managers/MemberManager.js"
import { Link, useNavigate, useLocation } from 'react-router-dom'


export const MyMembers = () => {
    const [ myMembers, setMyMembers ] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    
    const loadMembers = () => {
        getMyMembership().then(data => setMyMembers(data))
    }

    useEffect(() => {
        loadMembers()
    }, [])
    
    const memberSum = myMembers.length
    const { circleName } = location?.state

    const confirmDelete = (member) => {
        let check = window.confirm("Are you sure you want to remove this member from your circle?")
        if (check) {  
        deleteMember(member)
            .then(loadMembers)
        } 
    }

    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader"><Link className="portal__link" to="/" >Circles</Link> / <Link className="my_circle__link" to="/mycircle" >{circleName}</Link> / Members</h2>
        </div>
        {memberSum < 3 ? <div><i>Your circle must have three members to be active! Still {3 - memberSum} more to go.</i></div> : ""}
        <h3><Link className="invite__link" to="/invite" state={{ circleName: circleName }}>Invite Members</Link></h3>
        <article className="members">
            <h4>Active Members</h4>
            {
                myMembers?.map(member => {
                    return <section key={`member--${member.id}`} className="member">
                        <div className="member__name"><strong>{member?.circler?.user?.first_name + " " + member?.circler?.user?.last_name}</strong></div>
                        <div className="member__content">{member?.circler?.user?.email}</div>
                        <div className="member__date_joined">Date Joined: {member?.date_joined}</div>
                        <button className="button-55" onClick={() => {
                                        confirmDelete(member.id)
                                        }}
                                    >Delete Member</button>
                    </section>
                })
            }
        </article>

        </>
    )
}