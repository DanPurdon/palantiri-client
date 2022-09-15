import React, { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { getMyAccount } from "../../managers/UserManager.js"
import { editMyAccount } from "../../managers/UserManager.js"


export const EditProfile = () => {
    const [ myAccount, setMyAccount ] = useState({})
    const navigate = useNavigate()
    
    
    useEffect(() => {
        getMyAccount().then(data => setMyAccount(data.user))
    }, [])
    
    const changeAccountState = (property, value) => {
        const copy = { ...myAccount }
        copy[property] = value
        setMyAccount(copy)
    }

    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader"><Link className="portal__link" to="/" >Circles</Link> / Edit Profile</h2>
        </div>
        
        <form className="accountForm">
            <h2 className="accountForm__title">Update Account Info</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" required autoFocus className="form-control"
                        value={myAccount?.username}
                        onChange={
                            (evt) => {
                                changeAccountState("username", evt.target.value)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="first_name">First name: </label>
                    <input type="text" name="first_name" required autoFocus className="form-control"
                        value={myAccount?.first_name}
                        onChange={
                            (evt) => {
                                changeAccountState("first_name", evt.target.value)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="last_name">Last name: </label>
                    <input type="text" name="last_name" required autoFocus className="form-control"
                        value={myAccount?.last_name}
                        onChange={
                            (evt) => {
                                changeAccountState("last_name", evt.target.value)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" required autoFocus className="form-control"
                        value={myAccount?.email}
                        onChange={
                            (evt) => {
                                changeAccountState("email", evt.target.value)
                            }
                        }
                    />
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    
                    const account = {
                        id: myAccount.id,
                        username: myAccount.username,
                        first_name: myAccount.first_name,
                        last_name: myAccount.last_name,
                        email: myAccount.email
                    }

                    // Send POST request to your API
                    editMyAccount(account)
                        .then(() => navigate(`/profile`))
                }}
                className="btn btn-primary">Update</button>
        </form>

        </>
    )
}