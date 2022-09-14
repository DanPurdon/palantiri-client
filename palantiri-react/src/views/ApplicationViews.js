import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { Portal } from "../components/portal/Portal"
import { Link, useNavigate } from "react-router-dom"
import { MyCircle } from "../components/myCircle/MyCircle"
import { MyMembers } from "../components/myCircle/Members"
import { Invite } from "../components/myCircle/Invite"
import { Post } from "../components/myCircle/Post"
import { PostDetails } from "../components/myCircle/PostDetails"
import { MessageDetails } from "../components/myCircle/MessageDetails"
import { OtherCircles } from "../components/otherCircles/otherCircles"

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
                <Route path="post" element={<Post />} />
                <Route path="mycircle/:postId" element={<PostDetails/>} /> 
                <Route path="messages/:messageId" element={<MessageDetails/>} /> 

                <Route path="circles" element={<OtherCircles />} />

                {/* <Route path="events/:eventId/edit" element={ <UpdateEvent /> } /> */}
            </Route>
        </Routes>
    </>
}

