export const getMyCircle = () => {
    return fetch("http://localhost:8000/circles?current_user", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

export const getOtherCircles = () => {
    // Fetches other circles to which the authenticated user has membership
    return fetch("http://localhost:8000/circles?current_member", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

