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

export const getCircle = (circleId) => {
    // Fetches other circles to which the authenticated user has membership
    return fetch(`http://localhost:8000/circles?circle=${circleId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

export const editCircleName = (circleObject) => {
    return fetch(`http://localhost:8000/circles/${circleObject.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(circleObject)
    })
}