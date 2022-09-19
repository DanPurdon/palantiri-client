export const getMyMembership = () => {
    return fetch("http://localhost:8000/members?current_user", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

export const getCircleInvites = () => {
    return fetch("http://localhost:8000/invitations?current_user", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

export const getMyInvites = () => {
    return fetch("http://localhost:8000/invitations?current_member", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

export const searchUsersByEmail = (email) => {
    return fetch(`http://localhost:8000/circlers?email=${email}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

export const createInvitation = (circlerId) => {
    return fetch("http://localhost:8000/invitations", { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"invitee": circlerId})
    })
        .then(response => response.json())
}

export const acceptInvitation = (invitationId) => {
    return fetch("http://localhost:8000/members", { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"invite": invitationId})
    })
        .then(response => response.json())
}

export const deleteInvitation = (invitationId) => {
    return fetch(`http://localhost:8000/invitations/${invitationId}`, {
        method: "DELETE",
        headers: {"Authorization": `Token ${localStorage.getItem("palantiri_token")}`}
    })
}

export const deleteMember = (memberId) => {
    return fetch(`http://localhost:8000/members/${memberId}`, {
        method: "DELETE",
        headers: {"Authorization": `Token ${localStorage.getItem("palantiri_token")}`}
    })
}