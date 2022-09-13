export const getMyCircle = () => {
    return fetch("http://localhost:8000/circles?current_user", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("palantiri_token")}`
        }
    })
        .then(response => response.json())
}