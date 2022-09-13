import { Link, useNavigate } from "react-router-dom"
import "./Portal.css"

export const Portal = () => {
    const navigate = useNavigate()
    return (
        <ul className="portal">
            {
                (localStorage.getItem("palantiri_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-button"
                            onClick={() => {
                                localStorage.removeItem("palantiri_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
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
