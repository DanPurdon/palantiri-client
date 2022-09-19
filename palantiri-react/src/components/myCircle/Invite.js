import React, { useEffect, useState } from "react"
import { getCircleInvites, searchUsersByEmail, createInvitation } from "../../managers/MemberManager.js"
import { Link, useNavigate, useLocation } from 'react-router-dom'


export const Invite = () => {
    const [ myInvites, setMyInvites ] = useState([])
    const [ searchEmail, setSearchEmail ] = useState("")
    const [ searchMessage, setSearchMessage ] = useState(``)
    const [ searchResult, setSearchResult ] = useState({})
    const navigate = useNavigate()
    const location = useLocation()
    
    const loadInvites = () => {
        getCircleInvites().then(data => setMyInvites(data))
    }

    useEffect(() => {
        loadInvites()
    }, [])
    
    useEffect(() => {
        if (Object.keys(searchResult).length) {
            searchResult.id 
            ? 
            confirmInvite()
            :
            setSearchMessage(`User not found with that email. Please check for errors and verify that the user is signed up with Palantiri.`)
        } 
    }, [searchResult])
    
    const confirmInvite = () => {
        let check = window.confirm(`User found! 
        First name: ${searchResult.user.first_name}
        Last name: ${searchResult.user.last_name} 
        Invite User?`)
        if (check) {  
        createInvitation(searchResult.id)
            .then(setSearchEmail(""))
            .then(setSearchMessage(``))
            .then(setSearchResult({}))
            .then(loadInvites)
        } 
    }

        
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
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Search for User Email: </label>
                    <input type="text" name="description" required autoFocus className="form-control" placeholder="enter email"
                        value={searchEmail}
                        onChange={
                            (evt) => {
                                setSearchEmail(evt.target.value)
                            }
                        }
                    />
                </div>
            </fieldset>
            
            <div>{searchMessage}</div>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    searchUsersByEmail(searchEmail)
                        .then((data) => setSearchResult(data))
                }}
                className="btn btn-primary">Search Palantiri</button>

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