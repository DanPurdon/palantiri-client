import React, { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { editCircleName } from "../../managers/CircleManager.js"
import { getMyAccount } from "../../managers/UserManager.js"


export const Profile = () => {
    const [ myAccount, setMyAccount ] = useState({})
    const navigate = useNavigate()
    const myCircle = myAccount?.circle_info?.[0]
    const [editing, setEditing] = useState({
        editing: false,
        name: ""
    })
    
    const loadMyAccount = () => {
        getMyAccount().then(data => setMyAccount(data))
    }
    
    useEffect(() => {
        loadMyAccount()
    }, [])

    
    return (
        <>
        <div className="main__header">
        <h1>Palantiri</h1>
            <h2 className="main__subheader"><Link className="portal__link" to="/" >Circles</Link> / Profile</h2>
        </div>
        
        <article className="profile">
            <h3>Circle Name: 
                {
                editing.editing 
                    ? 
                    <section className="myCircle" key={`myCircle--${myCircle?.id}`}>
                        <div className="form-group">
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder={editing?.name}
                                value={editing?.name}
                                onChange={
                                    (evt) => {
                                        const copy = { ...editing }
                                        copy.name = evt.target.value
                                        setEditing(copy)
                                    }
                                } />
                            <button onClick={() => {
                                editCircleName({
                                    id: myCircle?.id,
                                    name: editing.name
                                })
                                .then(setEditing({editing: false, categoryId: null, name: ""}))
                                .then(loadMyAccount)
                                }}
                                >Save</button>
                        </div>
                    </section> 
                    :
                    <section className="myCircle" key={`myCircle--${myCircle?.id}`}>
                        <div><strong>{myCircle?.name}</strong><br></br>
                            <button className="button-55" onClick={() => {
                                setEditing({editing: true, name: myCircle?.name})
                                loadMyAccount()
                                }}
                                >Edit</button>
                        </div>
                    </section>
                }
                </h3>
                    
            <h4>Username: {myAccount?.user?.username}
                <br></br>
                First Name: {myAccount?.user?.first_name}
                <br></br>
                Last Name: {myAccount?.user?.last_name}
                <br></br>
                Email: {myAccount?.user?.email}
            </h4>
            
        </article>

        <button className="nav-button"
                            onClick={() => {
                                navigate('/profile/edit')
                            }}
                        >Edit Account Info</button>

        <button className="nav-button"
                            onClick={() => {
                                localStorage.removeItem("palantiri_token")
                                navigate('/login')
                            }}
                        >Logout</button>
        </>
    )
}