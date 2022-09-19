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
import { OtherCircles } from "../components/otherCircles/OtherCircles"
import { PostView } from "../components/otherCircles/PostView"
import { Profile } from "../components/profile/Profile"
import { EditProfile } from "../components/profile/EditProfile"
import { CircleView } from "../components/otherCircles/CircleView"
import { SendMessage } from "../components/otherCircles/SendMessage"

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
                <Route path="mymessages/:messageId" element={<MessageDetails/>} /> 

                <Route path="profile" element={<Profile />} />
                <Route path="profile/edit" element={<EditProfile />} />
                
                <Route path="circles" element={<OtherCircles />} />
                <Route path="circles/:circleId" element={<CircleView />} />
                <Route path="posts/:postId" element={<PostView />} />
                <Route path="messages/create/:circleId" element={<SendMessage />} />

                
            </Route>
        </Routes>
    </>
}

