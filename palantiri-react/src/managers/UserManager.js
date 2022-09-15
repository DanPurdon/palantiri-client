export const getMyAccount = () => {
    return fetch("http://localhost:8000/circlers?current_user", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}

export const editMyAccount = (userObject) => {
    return fetch(`http://localhost:8000/circlers/${userObject.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
    })
}