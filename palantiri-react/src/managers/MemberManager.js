export const getMyMembership = () => {
    return fetch("http://localhost:8000/members?current_user", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

export const getMyInvites = () => {
    return fetch("http://localhost:8000/invitations?current_user", {
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
