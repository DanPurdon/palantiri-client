import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { Portal } from "../components/portal/Portal"
import { Link, useNavigate } from "react-router-dom"
import { MyCircle } from "../components/myCircle/myCircle"
import { MyMembers } from "../components/myCircle/members"
import { Invite } from "../components/myCircle/invite"

export const ApplicationViews = () => {
    const navigate = useNavigate()
    return <>
        <Routes>
            <Route path="/" element={<Portal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="mycircle" element={<MyCircle />} />
                <Route path="mymembers" element={<MyMembers />} />
                <Route path="invite" element={<Invite />} />
                {/* // <Route path="events/:eventId/edit" element={ <UpdateEvent /> } />
                // <Route path="events/:eventId" element={<EventDetails/>} /> */}
            </Route>
        </Routes>
    </>
}

