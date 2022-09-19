import { Link, useNavigate } from "react-router-dom"
import "./Portal.css"

export const Portal = () => {
    const navigate = useNavigate()
    return (
        <ul className="portal">
            {
                (localStorage.getItem("palantiri_token") !== null) ?
                        <>
                        <h1>Palantiri / Circles</h1>
                        <h2 className="main__links"><Link className="main__link" to="/mycircle" >mine</Link></h2>
                        <h2 className="main__links"><Link className="main__link" to="/circles" >others</Link></h2>
                        <h2 className="main__links"><Link className="main__link" to="/profile" >profile</Link></h2>
                        </>
                    :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
